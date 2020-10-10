import React from 'react'
import { render } from '@testing-library/react'
import DiceRoll from './DiceRoll'

jest.mock('./NiceDice', () => () => <div>NiceDice</div>)
jest.mock('components/button/Button', () => ({children}) => <div>{children}</div>)
describe('NiceDice', () => {
  it('renders DiceRoll', () => {
    const { container } = render(<DiceRoll />)

    expect(container).toMatchSnapshot()
  })
})
