import { useCallback, useContext } from 'react'
import VilleInfos from 'app/VilleInfos'
import VillesContext from 'components/VillesContext'

const Villes = () => {
  const { villes, setVilles } = { villes: [], setVilles: () => {} } // TODO 3: Récupérer villes et setVilles depuis le context
  const supprimeVille = useCallback(selection => setVilles(prev => prev.filter(v => v.id !== selection.id)), [])
  return (
    <>
      {villes.map(ville => (
        <VilleInfos ville={ville} key={ville.id} onSelect={supprimeVille} />
      ))}
    </>
  )
}

Villes.propTypes = {}

export default Villes
