import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import { lazy,Suspense } from 'react';
import LoadingComponent from "../components/usedComponents/LoadingComponent";
import AdminHomePage from "../pages/Admin/AdminHomePage.jsx";
import PrivateRoute from "./AdminAuthRoute.jsx";
import DashBoardDisplay from "../components/admin/dashboard/DashBoardDisplay.jsx";



 const HomePage = lazy(() => import('../pages/HomePage.jsx'));
 const GalleryPage = lazy(() => import('../pages/GalleryPage'));
  const LoginAdmin = lazy(() => import('../components/admin/LoginAdmin.jsx'));
  const AdminLayout = lazy(() => import('../layout/AdminLayout.jsx'));
  const AdminGalleryPage = lazy(() => import('../pages/Admin/AdminGalleryPage.jsx'));
  const AdminProfilePage = lazy(() => import('../pages/Admin/AdminProfilePage.jsx'));
  const AdminDashBoard = lazy(() => import('../pages/Admin/AdminDashBoard.jsx'));


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
        },
        {
            path:"profile",
            element:(
                <PrivateRoute>
                    <AdminProfilePage/>
                </PrivateRoute>
            )
        },
        {
            path:"dashboard",
            element:(
                <PrivateRoute>
                    <AdminDashBoard/>
                </PrivateRoute>
            ),
            children:[
               {
                 path:"",
                 element:<DashBoardDisplay/>
               }
            ]
        }
    ]
    }
    
])