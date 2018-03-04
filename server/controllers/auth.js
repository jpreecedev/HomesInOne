module.exports = {
  logout: (req, res) => {
    req.logout()
    req.redirect('/')
  },
  login: (req, res) => {},
  profile: (req, res) =>
    res.status(200).send({
      user: req.user
    })
}
