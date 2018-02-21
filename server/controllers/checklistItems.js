const ChecklistItem = require('../models').ChecklistItem

module.exports = {
  create(req, res) {
    const data = req.body

    data.forEach(item => {
      item.checklistId = req.params.checklistId
    })

    return ChecklistItem.bulkCreate(data)
      .then(checklistItem => res.status(201).send(checklistItem))
      .catch(error => res.status(400).send(error))
  }
}
