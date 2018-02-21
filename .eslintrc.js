module.exports = {
  "extends": ["standard", "standard-react"],
  "plugins": ["jest"],
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "rules": {
    "jsx-quotes": ["error", "prefer-double"]
  }
}
