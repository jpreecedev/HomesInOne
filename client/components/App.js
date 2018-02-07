import React from 'react'
import { connect } from 'react-redux'

import AppNavBar from './AppNavBar'
import AppHeader from './AppHeader'
import Heading from './Heading'
import Button from './Button'

const App = props => {
  return (
    <div>
      <AppNavBar />
      <AppHeader />
      <main className='container'>
        <Heading text={props.prop} />
        <Button>
          Yo maaan
        </Button>
        <Button variant='flat'>
          Another maaan
        </Button>
      </main>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    prop: store.exampleState.prop
  }
}

export default connect(mapStateToProps)(App)
