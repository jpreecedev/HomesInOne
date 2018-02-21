import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import grey from 'material-ui/colors/grey'

const activeGrey = grey[200]

const themeStyles = theme => ({
  active: {
    backgroundColor: activeGrey
  }
})

const NavLink = ({ to, className, classes, children, isActive: getIsActive }) => {
  const path = typeof to === 'object' ? to.pathname : to

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')

  return (
    <Route
      path={escapedPath}
      children={({ location, match }) => {
        const isActive = !!(getIsActive ? getIsActive(match, location) : match)
        const linkClassName = isActive ? [className, classes.active].filter(i => i).join(' ') : className

        return (
          <Link to={to} className={linkClassName}>
            {children}
          </Link>
        )
      }}
    />
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  isActive: PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(themeStyles)(NavLink)
