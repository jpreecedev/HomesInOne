const Checklist = require('../models').Checklist
const ChecklistItem = require('../models').ChecklistItem

module.exports = {
  create(req, res) {
    return Checklist.create({
      name: req.body.name
    })
      .then(checklist => {
        const checklistItems = req.body.items.map(item => {
          return {
            ...item,
            checklistId: checklist.id
          }
        })

        return ChecklistItem.bulkCreate(checklistItems)
      })
      .then(checklist => res.status(201).send(checklist))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Checklist.findAll({
      include: [
        {
          model: ChecklistItem,
          as: 'checklistItems'
        }
      ]
    })
      .then(checklists => res.status(200).send(checklists))
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    return Checklist.findById(req.params.checklistId)
      .then(checklist => {
        if (!checklist) {
          return res.status(400).send({
            message: 'Checklist Not Found'
          })
        }
        return checklist
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}
