const passportJwt = require('passport-jwt')
const Strategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

const User = require('../../models').User

const config = require('../../config').authentication

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const JwtStrategy = passport => {
  const strategy = new Strategy(params, (payload, done) => {
    User.findOne({ where: { id: payload.id } }).then(user => {
      if (user) {
        return done(null, {
          id: user.id
        })
      }
      return done(new Error('User not found'), null)
    })
  })

  passport.use(strategy)
}

module.exports = JwtStrategy
