import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'

const NavLink = ({ to, className, children, isActive: getIsActive }) => {
  const path = typeof to === 'object' ? to.pathname : to

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')

  return (
    <Route path={escapedPath} children={({location, match}) => {
      const isActive = !!(getIsActive ? getIsActive(match, location) : match)
      const linkClassName = isActive
        ? [className, 'active'].filter(i => i).join(' ')
        : className

      return (
        <Link to={to} className={linkClassName}>
          {children}
        </Link>
      )
    }} />
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.func
}

export default NavLink
