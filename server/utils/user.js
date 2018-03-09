const bcrypt = require('bcrypt-nodejs')

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next()

  res.status(403).send()
}

const generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

const validPassword = (suppliedPassword, storedPassword) => {
  return bcrypt.compareSync(suppliedPassword, storedPassword)
}

module.exports = {
  isAuthenticated,
  generateHash,
  validPassword
}
