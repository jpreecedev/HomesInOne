const localSignup = require('./local/signup')

const config = passport => {
  localSignup(passport)
}

module.exports = config
