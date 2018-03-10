const jwt = require('jwt-simple')
const config = require('../config').authentication

const User = require('../models').User
const userUtils = require('../utils/user')

const signup = (req, res, next) => {
  const { emailAddress, password, passwordConfirm } = req.body
  if (!(emailAddress && password && passwordConfirm && password === passwordConfirm)) {
    return next('Valid email address and password required')
  }

  User.findOne({ where: { email: emailAddress } }).then(user => {
    if (user) {
      return next('Email address is already taken')
    }

    User.create({
      email: emailAddress,
      password: userUtils.generateHash(password)
    })
      .then(newUser => {
        const payload = {
          id: newUser.id
        }

        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
          exp: Math.round(Date.now() / 1000 + 5 * 60 * 60),
          token
        })
      })
      .catch(error => {
        res.status(500).send(error)
      })
  })
}

const login = (req, res, next, passport) => {
  passport.authenticate('user-login', (err, user, info) => {
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

  User.findOne({ where: { email: emailAddress } }).then(user => {
    if (user) {
      if (!userUtils.validPassword(password, user.password)) {
        res.status(401).send({
          message: 'Invalid credentials'
        })
        return next()
      }

      const payload = {
        id: user.id
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
  login,
  logout,
  profile,
  generateToken
}
