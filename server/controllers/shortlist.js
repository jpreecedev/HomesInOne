const Shortlist = require('../models').Shortlist

module.exports = {
  create(req, res) {
    return Shortlist.create(req.body)
      .then(shortlist => res.status(201).send(shortlist))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Shortlist.findAll()
      .then(shortlist => res.status(200).send(shortlist))
      .catch(error => res.status(400).send(error))
  }
}
