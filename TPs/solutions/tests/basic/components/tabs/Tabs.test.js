import React from 'react'
import { render, fireEvent, getNodeText, screen } from '@testing-library/react'
import Tabs from './Tabs'
import Tab from './Tab'

describe('Tabs', () => {
  const Body1 = ({ setDetail }) => (
    <div onClick={() => setDetail('info !')} data-testid="body1">
      body1
    </div>
  )
  const Body2 = () => <div data-testid="body2">body2</div>

  it('displays simple Tabs', () => {
    const { container } = render(
      <Tabs>
        <Tab title="title1">
          <Body1 />
        </Tab>
        <Tab title="title2">
          <Body2 />
        </Tab>
      </Tabs>
    )

    expect(container).toMatchSnapshot()
  })

  it('displays second tab body when clicking on title2', async () => {
    render(
      <Tabs>
        <Tab title="title1">
          <Body1 />
        </Tab>
        <Tab title="title2">
          <Body2 />
        </Tab>
      </Tabs>
    )
    expect(screen.queryByTestId('body1')).toBeTruthy()
    expect(screen.queryByTestId('body2')).toBeFalsy()

    const secondTab = screen.getAllByRole('tab')[1]
    fireEvent.click(secondTab)

    expect(screen.queryByTestId('body1')).toBeFalsy()
    expect(screen.queryByTestId('body2')).toBeTruthy()
  })

  it('displays detail after setting it', () => {
    render(
      <Tabs>
        <Tab title="title1">
          <Body1 />
        </Tab>
        <Tab title="title2">
          <Body2 />
        </Tab>
      </Tabs>
    )

    const firstTabDetails = screen.getAllByRole('note')[0]
    expect(getNodeText(firstTabDetails)).not.toContain('info !')
    fireEvent.click(screen.getByTestId('body1'))
    expect(getNodeText(firstTabDetails)).toContain('info !')
  })
})
