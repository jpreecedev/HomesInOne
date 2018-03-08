const localStrategy = require('./local')

const config = passport => {
  localStrategy(passport)
}

module.exports = config
