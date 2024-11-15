import { axiosInstance } from "./Api";


export const adminLogin = async (data) => {
    try {
        
        const response = await axiosInstance.post("/admin/login",{
            email:data.email,
            password:data.password
        })
        return response

    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const checkAdmin =async () => {
    try {
        const response = await axiosInstance.get("/admin/check")
       
        return response.data.success
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const adminProfile = async () => {
    try {
        const response = await axiosInstance.get("/admin/profile")
        return response.data.data
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const updateAdminProfile = async (data) => {
    try {
       await axiosInstance.put("/admin/profile/update",
        {
            username:data.username,
            email:data.email
        } 
        )
        
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const updateAdminPassword = async (data) => {
    try {
       await axiosInstance.put("/admin/profile/password",
        {
            password:data.password,
            confirmPassword:data.confirmPassword,
            oldPassword:data.oldPassword
            
        } 
        )
     
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const adminCardData = async () => {
    try {
      const response = await axiosInstance.get("/admin/package")
      return response.data.data
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
    }
  }
  

  export const adminBackgroundUpdate = async (id,value) => {
    try {
       
       await axiosInstance.put(`/admin/photo/update/${id}`,{
        screensType:value
      })
      
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
    }
  }

  export const adminGalleryImageDelete = async (id) => {
    try {
       
       await axiosInstance.delete(`/admin/photo/${id}`)
      
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
    }
  }
  


export const adminGallery = async () => {
    try {
        const response = await axiosInstance.get("/admin/gallery")
        return response.data
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const adminSearchImage = async (data) => {
    try {
  
     const searchResponse = await axiosInstance.get("/admin/search",{
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


export const adminLogOut= async () => {
    try {
        await axiosInstance.post("/admin/logout")
       
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}