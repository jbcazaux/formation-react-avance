import React, { useContext, useEffect, useState } from 'react'
import VillesContext from 'components/VillesContext'
import villesApi from 'apis/villes'

const RechargerVilles = () => {
  const { setVilles } = useContext(VillesContext)
  const [salt, setSalt] = useState(0)

  useEffect(() => {
    villesApi.get().then(setVilles)
  }, [salt])

  return <button onClick={() => setSalt(p => p + 1)}>Recharger les villes</button>
}

RechargerVilles.propTypes = {}

export default RechargerVilles
