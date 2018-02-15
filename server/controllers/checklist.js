const Checklist = require('../models').Checklist
const ChecklistItem = require('../models').ChecklistItem

module.exports = {
  create (req, res) {
    return Checklist
      .create({
        name: req.body.name
      })
      .then(checklist => res.status(201).send(checklist))
      .catch(error => res.status(400).send(error))
  },
  list (req, res) {
    return Checklist
      .findAll({
        include: [{
          model: ChecklistItem
        }]
      })
      .then(checklists => res.status(200).send(checklists))
      .catch(error => res.status(400).send(error))
  }
}
