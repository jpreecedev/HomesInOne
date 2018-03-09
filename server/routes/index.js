const checklistController = require('../controllers').checklist
const shortlistController = require('../controllers').shortlist
const checklistItemController = require('../controllers').checklistItems
const authController = require('../controllers').auth

const createRoutes = (app, passport) => {
  const isAuthenticated = passport.authenticate('jwt', { session: false })

  app.get('/api/checklists', checklistController.list)

  app.post('/api/checklists', checklistController.create)
  app.post('/api/checklists/:checklistId/items', checklistItemController.create)

  app.delete('/api/checklists/:checklistId', checklistController.destroy)

  app.get('/api/shortlists', shortlistController.list)
  app.post('/api/shortlist', shortlistController.create)

  app.get('/logout', authController.logout)
  app.get('/profile', isAuthenticated, authController.profile)

  app.post('/token', (req, res, next) => {
    authController.generateToken(req, res, next, passport)
  })
}

module.exports = createRoutes
