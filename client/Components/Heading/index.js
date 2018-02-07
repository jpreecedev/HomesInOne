import React from 'react'
import Typography from 'material-ui/Typography'

const Heading = props => {
  const { text } = props
  return (
    <Typography variant='display1' gutterBottom>
      { text }
    </Typography>
  )
}

export default Heading
