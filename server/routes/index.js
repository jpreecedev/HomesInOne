const checklistController = require('../controllers').checklist
const shortlistController = require('../controllers').shortlist
const checklistItemController = require('../controllers').checklistItems
const authController = require('../controllers').auth

const createRoutes = (app, passport) => {
  const isAuthenticated = passport.authenticate('jwt', { session: false })

  app.get('/api/checklists', isAuthenticated, checklistController.list)

  app.post('/api/checklists', isAuthenticated, checklistController.create)
  app.post('/api/checklists/:checklistId/items', isAuthenticated, checklistItemController.create)

  app.delete('/api/checklists/:checklistId', isAuthenticated, checklistController.destroy)

  app.get('/api/shortlists', isAuthenticated, shortlistController.list)
  app.post('/api/shortlist', isAuthenticated, shortlistController.create)

  app.get('/logout', authController.logout)
  app.get('/profile', isAuthenticated, authController.profile)

  app.post('/token', (req, res, next) => {
    authController.generateToken(req, res, next, passport)
  })
}

module.exports = createRoutes
