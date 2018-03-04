const LocalStrategy = require('passport-local').Strategy

const User = require('../../../models').User
const Local = require('../../../models').Local

const generateHash = require('../../../utils/user').generateHash

const Signup = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      if (!user) {
        done('User not found')
      } else {
        done(null, user)
      }
    })
  })

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      processRequest
    )
  )
}

const tryCreateUser = (email, password, done) => {
  Local.findOne({ where: { email } })
    .then(local => {
      if (local) {
        return done('That email is already taken.')
      }

      User.create().then(newUser => {
        Local.create({
          email,
          password: generateHash(password)
        }).then(localUser => {
          User.findById(newUser.id).then(createdUser => {
            if (!createdUser) {
              return done('Failed to create user')
            }
            return done(null, createdUser)
          })
        })
      })
    })
    .catch(err => {
      return done(err)
    })
}

const processRequest = (req, email, password, done) => {
  process.nextTick(() => {
    tryCreateUser(email, password, done)
  })
}

module.exports = Signup
