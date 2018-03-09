const jwtStrategy = require('./jwt')

const config = passport => {
  jwtStrategy(passport)
}

module.exports = config
