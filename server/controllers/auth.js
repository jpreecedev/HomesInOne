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

const login = (req, res, next, passport) => {
  passport.authenticate('local-login', (err, user, info) => {
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
  })(req, res, next)
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
  profile
}
