const jwt = require('jwt-simple')
const config = require('../config').authentication

const Local = require('../models').Local
const validPassword = require('../utils/user').validPassword

const signup = (req, res, next, passport) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.send({ success: false, message: 'authentication failed' })
    }
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr)
      }
      return res.send({ success: true, message: 'authentication succeeded' })
    })
  })
}

const generateToken = (req, res, next, passport) => {
  const { emailAddress, password } = req.body
  if (!(emailAddress && password)) {
    res.status(401).send({
      message: 'Invalid credentials'
    })
    return next()
  }

  Local.findOne({ where: { email: emailAddress } }).then(local => {
    if (local) {
      if (!validPassword(password, local.password)) {
        res.status(401).send({
          message: 'Invalid credentials'
        })
        return next()
      }

      const payload = {
        id: local.id
      }

      const token = jwt.encode(payload, config.jwtSecret)
      res.json({
        exp: Math.round(Date.now() / 1000 + 5 * 60 * 60),
        token: token
      })
    } else {
      res.status(401).send({
        message: 'Invalid credentials'
      })
    }
  })
}

const logout = (req, res) => {
  req.logout()
  req.redirect('/')
}

const profile = (req, res) =>
  res.status(200).send({
    user: req.user
  })

module.exports = {
  signup,
  logout,
  profile,
  generateToken
}
