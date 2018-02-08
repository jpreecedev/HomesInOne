import React from 'react'
import { connect } from 'react-redux'

import AppNavBar from './AppNavBar'

const App = props => {
  return (
    <div>
      <AppNavBar />
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' href='#'>
                    <span data-feather='home' />
                    Dashboard <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file' />
                    Orders
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='shopping-cart' />
                    Products
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='users' />
                    Customers
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='bar-chart-2' />
                    Reports
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='layers' />
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
                <span>Saved reports</span>
                <a className='d-flex align-items-center text-muted' href='#'>
                  <span data-feather='plus-circle' />
                </a>
              </h6>
              <ul className='nav flex-column mb-2'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file-text' />
                  Current month
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file-text' />
                  Last quarter
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file-text' />
                  Social engagement
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file-text' />
                  Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Dashboard</h1>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    prop: store.exampleState.prop
  }
}

export default connect(mapStateToProps)(App)
