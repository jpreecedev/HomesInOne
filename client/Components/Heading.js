import React from 'react'

const Heading = props => {
  const { text } = props
  return (
    <div className='border-bottom pb-2 mb-3'>
      <h1 className='h2'>
        { text }
      </h1>
    </div>
  )
}

export default Heading
