import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const App = ({ appId }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('laposte_hexasmal_small.json')
      .then(({ data: fetchedData }) => {
        setData(fetchedData)
        setIsLoading(false)
      })
      .then(() => setIsLoading(false))
  }, [])

  console.log('render ' + appId, { isLoading }, { 'data.length': data?.length ?? 0 })
  if (isLoading) return <div>loading...</div>
  if (data) return <div>{data.map(c => c.fields.nom_de_la_commune).join(', ')}</div>

  return <div>starting...</div>
}

App.propTypes = {
  appId: PropTypes.string.isRequired,
}

export default App
