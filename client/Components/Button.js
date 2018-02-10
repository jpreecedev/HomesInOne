import React from 'react'

const AppButton = props => {
  const { children, variant } = props

  return (
    <button className={`btn btn-${variant || 'primary'}`}>
      { children }
    </button>
  )
}

export default AppButton
