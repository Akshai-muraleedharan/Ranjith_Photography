import {create} from 'zustand'
import {devTools} from 'zustand/middleware'


const useAuthStore = create(
    devTools((set) => ({
        admin:null,
        isAuthenticated:false,

        setUser: (user) => set({admin,isAuthenticated:true})
    }))
)


export default useAuthStore;