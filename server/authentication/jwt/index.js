const passportJwt = require('passport-jwt')
const Strategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

const User = require('../../models').User
const Local = require('../../models').Local

const config = require('../../config').authentication

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const JwtStrategy = passport => {
  const strategy = new Strategy(params, (payload, done) => {
    Local.findOne({ where: { id: payload.id } }).then(local => {
      if (local) {
        return done(null, {
          id: local.id
        })
      }
      return done(new Error('User not found'), null)
    })
  })

  passport.use(strategy)
}

module.exports = JwtStrategy
