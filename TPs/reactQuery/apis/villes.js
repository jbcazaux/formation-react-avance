import getAxios from 'apis/axios'
import { Coordonnees, Ville } from 'domain/Ville'
const axios = getAxios()

import allCities from '../../public/laposte_hexasmal_small.json'
let cities = allCities

const delay = async (value, duration) => new Promise(resolve => setTimeout(resolve, duration, value))

const villes = {
  get: async () => {
    //const { data } = await axios.get('items.json')
    // return data

    // fake implementation :
    const data = await delay(cities, 1000)
    return data
      .map(
        d =>
          new Ville(
            d.recordid,
            d.fields.code_commune_insee,
            d.fields.nom_de_la_commune,
            d.fields.code_postal,
            new Coordonnees(d.fields.coordonnees_gps[0], d.fields.coordonnees_gps[1]),
            d.fields.libelle_d_acheminement
          )
      )
      .sort((v1, v2) => v2.cp.localeCompare(v1.cp))
  },
  delete: async id => {
    //await axios.delete(`/cities/${id}`)

    // fake implementation :
    cities = cities.filter(v => v.recordid !== id)
    await delay(null, 1000)
  },
}

export default villes
