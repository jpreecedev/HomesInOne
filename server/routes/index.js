const checklistController = require('../controllers').checklist

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Checklist API!'
  }))

  app.get('/api/checklists', checklistController.list)
  app.post('/api/checklists', checklistController.create)
}
