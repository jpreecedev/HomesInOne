const checklistController = require('../controllers').checklist
const shortlistController = require('../controllers').shortlist
const checklistItemController = require('../controllers').checklistItems
const authController = require('../controllers').auth

const isAuthenticated = require('../utils/user').isAuthenticated

module.exports = (app, passport) => {
  app.get('/api/checklists', checklistController.list)

  app.post('/api/checklists', checklistController.create)
  app.post('/api/checklists/:checklistId/items', checklistItemController.create)

  app.delete('/api/checklists/:checklistId', checklistController.destroy)

  app.get('/api/shortlists', shortlistController.list)
  app.post('/api/shortlist', shortlistController.create)

  app.get('/logout', authController.logout)
  app.get('/profile', isAuthenticated, authController.profile)

  app.get('/failed', (req, res) => {
    res.status(400).send()
  })

  app.post('/login', (req, res, next) => authController.login(req, res, next, passport))
  app.post('/signup', (req, res, next) => authController.signup(req, res, next, passport))
}
