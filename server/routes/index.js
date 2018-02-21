const checklistController = require('../controllers').checklist
const checklistItemController = require('../controllers').checklistItems

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Checklist API!'
    })
  )

  app.get('/api/checklists', checklistController.list)

  app.post('/api/checklists', checklistController.create)
  app.post('/api/checklists/:checklistId/items', checklistItemController.create)

  app.delete('/api/checklists/:checklistId', checklistController.destroy)
}
