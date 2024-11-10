
import {create} from 'zustand'
import { devtools } from 'zustand/middleware';


const useAuthStore = create(
    devtools((set) => ({
        admin:null,
        isAuthenticated:false,
       

        setUser: (admin) => set({admin,isAuthenticated:true}),

        logout: async () => {
            try {
              await fetch(`${import.meta.env.VITE_BACKEND_CONNECT}/api/v1/admin/logout`, {
                method: 'POST',
                credentials: 'include', // Include cookies for logout
              });
              set({ user: null, isAuthenticated: false, error: null });
              
            } catch (error) {
              console.error('Logout error:', error);
            }
          }
        
    })),
  
)


export default useAuthStore;