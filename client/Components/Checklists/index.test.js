import React from 'react'
import { render } from 'enzyme'
import Checklists from './index'

const renderComponent = () => {
  return render(<Checklists />)
}

test('check that title is set', () => {
  const component = renderComponent()

  const header = component
    .find('h1')
    .first()
    .text()
  expect(header).toBe('Checklists')
})
