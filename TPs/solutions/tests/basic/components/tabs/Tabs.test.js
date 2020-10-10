import React from 'react'
import { render, fireEvent, getNodeText } from '@testing-library/react'
import Tabs from './Tabs'
import Tab from './Tab'

describe('Tabs', () => {
  const Body1 = ({ setSousTitre }) => (
    <div onClick={() => setSousTitre('info !')} data-testid="body1">
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
    const { container, queryByTestId } = render(
      <Tabs>
        <Tab title="title1">
          <Body1 />
        </Tab>
        <Tab title="title2">
          <Body2 />
        </Tab>
      </Tabs>
    )
    expect(queryByTestId('body1')).toBeTruthy()
    expect(queryByTestId('body2')).toBeFalsy()

    const secondTab = container.querySelectorAll('.tab')[1]
    fireEvent.click(secondTab)

    expect(queryByTestId('body1')).toBeFalsy()
    expect(queryByTestId('body2')).toBeTruthy()
  })

  it('displays info after setting it', async () => {
    const { container, getByTestId } = render(
      <Tabs>
        <Tab title="title1">
          <Body1 />
        </Tab>
        <Tab title="title2">
          <Body2 />
        </Tab>
      </Tabs>
    )

    const firstTab = container.querySelector('.selectedTab .soustitre')
    expect(getNodeText(firstTab)).not.toContain('info !')
    fireEvent.click(getByTestId('body1'))
    expect(getNodeText(firstTab)).toContain('info !')
  })
})
