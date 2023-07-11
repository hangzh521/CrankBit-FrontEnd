import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage'

// NOTE: Please use your own server port number, and will change to production server later
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8080',
})

axiosClient.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()
  if (user) {
    // eslint-disable-next-line no-param-reassign
    config.headers.common.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default axiosClient
