import React from 'react'
import { Ville } from 'domain/Ville'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

const Details = styled.div`
  display: flex;
`

const Nom = styled(Details)`
  font-weight: bold;
  margin-bottom: 10px;
`

const ComponentWithError = () => {
  throw new Error('Méchante erreur')
}


const VilleDetails = ({ ville }) => {
  if (ville.nom.startsWith('A')) {
    return <ComponentWithError />
  }

  return (
    <Layout data-ville={ville.id}>
      <Nom>{ville.nom} </Nom>
      <Details>Code Postal : {ville.cp} </Details>
      <Details>Code Insee : {ville.codeInsee} </Details>
    </Layout>
  );
}

VilleDetails.propTypes = {
  ville: Ville.propTypes.isRequired,
}

export default VilleDetails
