import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import { lazy,Suspense } from 'react';
import LoadingComponent from "../components/usedComponents/LoadingComponent";
import AdminHomePage from "../pages/Admin/AdminHomePage.jsx";
import PrivateRoute from "./AdminAuthRoute.jsx";
import AdminGalleryPage from "../pages/Admin/AdminGalleryPage.jsx";





 const HomePage = lazy(() => import('../pages/HomePage.jsx'));
 const GalleryPage = lazy(() => import('../pages/GalleryPage'));
  const LoginAdmin = lazy(() => import('../components/admin/LoginAdmin.jsx'));
  const AdminLayout = lazy(() => import('../layout/AdminLayout.jsx'));


export const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <Suspense fallback={<LoadingComponent/>}>
        <UserLayout/>
        </Suspense>
    ), 

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
            element:<LoginAdmin/>
           }

        ]
    },
    {
        path:"/admin",

        element:(
    <Suspense fallback={<LoadingComponent/>}>
          <PrivateRoute>  
        <AdminLayout/>  
        </PrivateRoute> 
        </Suspense>
    ),
    children:[
        {
            path:'home',
            element:(
                <PrivateRoute>  
            <AdminHomePage/>
            </PrivateRoute> 
        )
        },
        {
            path:'gallery',
            element:(
                <PrivateRoute>
                    <AdminGalleryPage/>
                </PrivateRoute>
            )
        }
    ]
    }
    
])