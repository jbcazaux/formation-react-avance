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

    // TODO 1: écrire un test avec snapshot
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

    // TODO : 1 - vérifier que body1 est affiché mais pas body2
    // TODO : 2 - faire un click sur le 2ème onglet
    // TODO : 3 - vérifier que body2 est affiché mais pas body1
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

    // TODO : 1 - Vérifier que le 'detail' n'est pas affiché dans la page
    // TODO : 2 - Cliquer sur body1 pour déclencher 'setDetail'
    // TODO : 3 - Vérifier que le 'detail' est affiché dans la page
  })
})
