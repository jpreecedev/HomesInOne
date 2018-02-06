import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import defaultState from '../store/defaultState'

import App from './app'

const mockStore = configureStore()
let store, renderedComponent

beforeEach(() => {
  store = mockStore({
    exampleState: {
      ...defaultState
    }
  })
  renderedComponent = mount(
    <App store={store} />
  )
})

test('check that title is set', () => {
  const header = renderedComponent.find('h1').first().text()
  expect(header).toBe('Hello')
})
