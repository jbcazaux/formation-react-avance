import axiosLib from 'axios'

let instance = null

const axios = () => {
  if (instance) return instance
  instance = axiosLib.create({
    timeout: 5000,
  })
  return instance
}

export default axios
