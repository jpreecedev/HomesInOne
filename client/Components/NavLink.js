import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavLink = props => {
  const { to, className, children, isActive: getIsActive } = props
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

export default NavLink
