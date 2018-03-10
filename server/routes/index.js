const shortlistController = require('../controllers').shortlist
const authController = require('../controllers').auth

const createRoutes = (app, passport) => {
  const isAuthenticated = passport.authenticate('jwt', { session: false })

  app.get('/api/shortlists', isAuthenticated, shortlistController.list)
  app.post('/api/shortlist', isAuthenticated, shortlistController.create)

  app.get('/logout', authController.logout)

  app.post('/token', (req, res, next) => {
    authController.generateToken(req, res, next, passport)
  })
}

module.exports = createRoutes
