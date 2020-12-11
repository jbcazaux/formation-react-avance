import PropTypes from 'prop-types'

export class Coordonnees {
  constructor(lat, lng) {
    this.lat = lat
    this.lng = lng
  }
}

Coordonnees.propTypes = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
})

export class Ville {
  constructor(id, codeInsee, nom, cp, coordonnees, libelleAcheminement) {
    this.id = id
    this.codeInsee = codeInsee
    this.nom = nom
    this.cp = cp
    this.coordonnees = coordonnees
    this.libelleAcheminement = libelleAcheminement
  }
}

Ville.propTypes = PropTypes.shape({
  codeInsee: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  coordonnees: Coordonnees.propTypes.isRequired,
  libelleAcheminement: PropTypes.string.isRequired,
})
