import { render } from '@testing-library/react'
import DiceRoll from './DiceRoll'

// TODO : 1 - mock NiceDice
// TODO : 2 - mock Button
describe('NiceDice', () => {
  it('renders DiceRoll', () => {
    const { container } = render(<DiceRoll />)

    expect(container).toMatchSnapshot()
  })
})
