import React from 'react'
import { connect } from 'react-redux'

import Header from '../styles/h1'

const App = props => {
  return (
    <div className='container'>
      <Header>
        { props.prop }
      </Header>
      <h1>
        { props.prop }
      </h1>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    prop: store.exampleState.prop
  }
}

export default connect(mapStateToProps)(App)
