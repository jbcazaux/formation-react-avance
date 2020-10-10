import React, { useState } from 'react'
import { roll } from './dice'
import NiceDice from './NiceDice'
import Button from 'components/button/Button'

const DiceRoll = () => {
  const [diceResult, setDiceResult] = useState(2)

  const rollDice = () => {
    const throwResult = roll(6)
    setDiceResult(throwResult)
  }

  return (
    <div>
      <NiceDice value={diceResult} />
      <Button onClick={rollDice}>Lancer le dé !</Button>
    </div>
  )
}

DiceRoll.propTypes = {}

export default DiceRoll
