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

    // TODO : 1 - verifier que body1 est affiché mais pas body2
    // TODO : 2 - faire un click sur le 2eme onglet
    // TODO : 3 - verifier que body2 est affiché mais pas body1
  })

  it('displays "soustitre" after setting it', async () => {
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

    // TODO : 1 - Vérifier que le soustitre n'est pas affiché sur le premier onglet
    // TODO : 2 - Cliquer sur body1 pour déclencher 'setSousTitre'
    // TODO : 3 - Vérifier que le soustitre est affiché sur le premier onglet
  })
})
