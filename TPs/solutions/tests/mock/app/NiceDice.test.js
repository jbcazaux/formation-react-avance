import { render } from '@testing-library/react'
import NiceDice from './NiceDice'

describe('NiceDice', () => {
  it('renders dice 1', () => {
    const { container } = render(<NiceDice value={1} />)
    expect(container).toMatchSnapshot()
  })
  it('renders dice 2', () => {
    const { container } = render(<NiceDice value={2} />)
    expect(container).toMatchSnapshot()
  })
  it('renders dice 3', () => {
    const { container } = render(<NiceDice value={3} />)
    expect(container).toMatchSnapshot()
  })
  it('renders dice 4', () => {
    const { container } = render(<NiceDice value={4} />)
    expect(container).toMatchSnapshot()
  })
  it('renders dice 5', () => {
    const { container } = render(<NiceDice value={5} />)
    expect(container).toMatchSnapshot()
  })
  it('renders dice 6', () => {
    const { container } = render(<NiceDice value={6} />)
    expect(container).toMatchSnapshot()
  })
})
