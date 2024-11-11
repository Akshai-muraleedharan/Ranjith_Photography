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
            confirmPassword:data.confirmPassword
            
        } 
        )
     
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}