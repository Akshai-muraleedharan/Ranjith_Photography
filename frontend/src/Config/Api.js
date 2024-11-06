import axios from 'axios'

const API_URL = "http://localhost:5000/api/v1"


const axiosInstance = axios.create({
  baseURL:API_URL,
  withCredentials:true
})


 export const galleryImage = async () => {
   try {

    const response = await axiosInstance.get("/user/gallery")

     return response.data.data

   } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error
   }
 }

 