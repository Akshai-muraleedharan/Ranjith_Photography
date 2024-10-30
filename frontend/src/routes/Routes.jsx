import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";



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
           }

        ]
    }
])