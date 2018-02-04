import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'
import styles from './app.css'

const classNames = classnames(
  'mb-5',
  styles.header
)
const App = props => {
  return (
    <div className='container'>
      <h1 className={classNames}>
        { props.prop }
      </h1>
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
