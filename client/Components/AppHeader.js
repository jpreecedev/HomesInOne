import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const AppHeader = ({ className }) => {
  const navClasses = classnames(
    className,
    'navbar navbar-expand navbar-dark bg-dark'
  )

  return (
    <nav className={navClasses}>
      <a className='navbar-brand' href='#'>HomesInOne.co.uk </a>
      <div className='collapse navbar-collapse' id='navbarsExample02'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

AppHeader.propTypes = {
  className: PropTypes.string
}

export default AppHeader
