import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import AdminLogin from "../components/admin/adminLogin";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<UserLayout/>,

        children:[
           {
            path:"",
            element:<HomePage/>
           },
           {
            path:"gallery",
            element:<GalleryPage/>
           },
           {
            path:"admin/login",
            element:<AdminLogin/>
           }

        ]
    }
])