import React, { useEffect, useState } from 'react'
import villesApi from 'apis/villes'

const RechargerVilles = () => {
  const { setVilles } = {setVilles: () => {}} // TODO 2: Récupérer setVilles depuis le context
  const [salt, setSalt] = useState(0)

  useEffect(() => {
    villesApi.get().then(setVilles)
  }, [salt])

  return <button onClick={() => setSalt(p => p + 1)}>Recharger les villes</button>
}

RechargerVilles.propTypes = {}

export default RechargerVilles
