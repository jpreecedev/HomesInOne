const checklistController = require('../controllers').checklist
const shortlistController = require('../controllers').shortlist
const checklistItemController = require('../controllers').checklistItems

module.exports = app => {
  app.get('/api/checklists', checklistController.list)

  app.post('/api/checklists', checklistController.create)
  app.post('/api/checklists/:checklistId/items', checklistItemController.create)

  app.delete('/api/checklists/:checklistId', checklistController.destroy)

  app.get('/api/shortlists', shortlistController.list)
  app.post('/api/shortlist', shortlistController.create)
}
