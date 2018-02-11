import React from 'react'
import classnames from 'classnames'

import NavLink from './NavLink'
import styles from 'Styles/AppSideNav'

const navClasses = classnames(
  styles.sidebar,
  'bg-light'
)

const AppSideNav = () => (
  <nav className={navClasses}>
    <ul className='nav flex-column'>
      <li className='nav-item'>
        <NavLink to={'/'} className='nav-link'>
          Dashboard
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={'/properties'} className='nav-link'>
          Properties
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={'/shortlist'} className='nav-link'>
          Shortlist
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={'/checklists'} className='nav-link'>
          Checklists
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default AppSideNav
