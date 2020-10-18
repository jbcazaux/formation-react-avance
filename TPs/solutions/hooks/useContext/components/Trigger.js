import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const TriggerContext = React.createContext()

const Trigger = ({ f, children }) => {
  const [salt, setSalt] = useState(0)
  useEffect(f, [f, salt])
  const update = useCallback(() => setSalt(s => s + 1), [])
  return <TriggerContext.Provider value={update}>{children}</TriggerContext.Provider>
}

Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  f: PropTypes.func.isRequired,
}

export default Trigger