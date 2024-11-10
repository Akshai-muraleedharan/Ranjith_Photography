import { axiosInstance } from "./Api";


export const adminLogin = async (data) => {
    try {
        console.log(data)
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
       console.log(response)
        return response.data.success
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}

export const logOutAdmin =async () => {
    try {
         await axiosInstance.post("/admin/logout")

    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error
    }
}