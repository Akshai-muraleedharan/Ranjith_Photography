import { axiosInstance } from "./Api";



 export const galleryImage = async () => {
   try {

    const response = await axiosInstance.get("/user/gallery")
    
     return response.data

   } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error
   }
 }

 export const searchImage = async (data) => {
  try {

   const searchResponse = await axiosInstance.get("/user/search",{
    params: {
      image: data
    }
   })
   
   return searchResponse.data

  } catch (error) {
   console.error("Registration error:", error.response?.data || error.message);
   throw error
  }
}

export const cardData = async () => {
  try {
    const response = await axiosInstance.get("user/package")
    return response.data.data
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
  }
}


export const formData = async (data) => {
  try {
   
    const searchResponse = await axiosInstance.post("/user/contact",{
      fullname:data.fullname,
      email:data.email,
      phoneNumber:data.phoneNumber,
      message:data.message
    })
return searchResponse.data
    
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    
   return error.response.data
   
  }
}
 