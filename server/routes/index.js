const checklistController = require('../controllers').checklist
const shortlistController = require('../controllers').shortlist
const checklistItemController = require('../controllers').checklistItems
const authController = require('../controllers').auth

const isLoggedIn = require('../utils/user').isLoggedIn

module.exports = (app, passport) => {
  app.get('/api/checklists', checklistController.list)

  app.post('/api/checklists', checklistController.create)
  app.post('/api/checklists/:checklistId/items', checklistItemController.create)

  app.delete('/api/checklists/:checklistId', checklistController.destroy)

  app.get('/api/shortlists', shortlistController.list)
  app.post('/api/shortlist', shortlistController.create)

  app.get('/logout', authController.logout)
  app.post('/login', authController.login)
  app.get('/profile', isLoggedIn, authController.profile)

  app.get('/failed', (req, res) => {
    res.status(400).send()
  })

  app.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.send({ success: false, message: 'authentication failed' })
      }
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr)
        }
        return res.send({ success: true, message: 'authentication succeeded' })
      })
    })(req, res, next)
  })
}
