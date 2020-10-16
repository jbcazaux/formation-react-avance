import getAxios from 'apis/axios'
import { Coordonnees, Ville } from 'domain/Ville'
const axios = getAxios()
const villes = {
  get_small: async () => {
    const { data } = await axios.get('./laposte_hexasmal_small.json')
    return data.map(
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
  },
  get: async () => {
    const { data } = await axios.get('./laposte_hexasmal.json')
    return data.map(
      d =>
        new Ville(
          d.recordid,
          d.fields.code_commune_insee,
          d.fields.nom_de_la_commune,
          d.fields.code_postal,
          d.fields.coordonnees_gps ? new Coordonnees(d.fields.coordonnees_gps[0], d.fields.coordonnees_gps[1]) : null,
          d.fields.libelle_d_acheminement
        )
    )
      .slice(0, 5000)
  },
}

export default villes
