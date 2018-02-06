import React from 'react'
import Button from 'material-ui/Button'

const AppButton = props => {
  const { text, variant, color } = props
  return (
    <Button variant={variant || 'raised'} color={color || 'primary'}>
      {text}
    </Button>
  )
}

export default AppButton
