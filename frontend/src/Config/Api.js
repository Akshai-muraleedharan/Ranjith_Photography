import axios from 'axios'



 const API_URL = `${import.meta.env.VITE_BACKEND_CONNECT}/api/v1`

export const axiosInstance = axios.create({
  baseURL:API_URL,
  withCredentials:true
}) 