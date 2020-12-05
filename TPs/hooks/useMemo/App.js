import { useState } from 'react'
import PropTypes from 'prop-types'

const Calculator = ({ a, b }) => {
  // TODO : memoizer le résultat de l'opération
  const add = (x, y) => {
    console.log('une loooongue addition')
    return x + y
  }

  return <div> {add(a, b)} </div>
}
Calculator.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

const App = () => {
  const [sel, setSel] = useState(0)
  return (
    <div>
      <button onClick={() => setSel(s => s + 1)}>re-render ({sel})</button>
      <Calculator a={4} b={2} />
    </div>
  )
}

export default App
