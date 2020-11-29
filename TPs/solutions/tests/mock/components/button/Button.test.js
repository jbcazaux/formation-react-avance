import { render, fireEvent, screen } from '@testing-library/react'
import Button from 'components/button/Button'

describe('NiceDice', () => {
  const mock = jest.fn()

  it('renders DiceRoll', () => {
    const { container } = render(<Button onClick={mock} />)

    expect(container).toMatchSnapshot()
  })

  it('calls onclick', () => {
    render(<Button onClick={mock} />)
    const button = screen.getByTestId('button')

    fireEvent.click(button)

    expect(mock).toHaveBeenCalled()
  })
})
