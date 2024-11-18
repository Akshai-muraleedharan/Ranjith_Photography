import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import { lazy,Suspense } from 'react';
import LoadingComponent from "../components/usedComponents/LoadingComponent";
import PrivateRoute from "./AdminAuthRoute.jsx";





 const HomePage = lazy(() => import('../pages/HomePage.jsx'));
 const GalleryPage = lazy(() => import('../pages/GalleryPage'));
  const LoginAdmin = lazy(() => import('../components/admin/LoginAdmin.jsx'));
  const AdminLayout = lazy(() => import('../layout/AdminLayout.jsx'));
  const AdminGalleryPage = lazy(() => import('../pages/Admin/AdminGalleryPage.jsx'));
  const AdminProfilePage = lazy(() => import('../pages/Admin/AdminProfilePage.jsx'));
  const AdminDashBoard = lazy(() => import('../pages/Admin/AdminDashBoard.jsx'));
  const AdminImageList = lazy(() => import('../components/admin/dashboard/AdminImageList.jsx'));
  const DashBoardDisplay = lazy(() => import('../components/admin/dashboard/DashBoardDisplay.jsx'));
  const AdminHomePage = lazy(() => import('../pages/Admin/AdminHomePage.jsx'));


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
            
            element:(
                <Suspense fallback={<LoadingComponent/>}>   
            <HomePage/>
            </Suspense>
            )
           },
           {
            path:"gallery",
            element:
            (
                <Suspense fallback={<LoadingComponent/>}> 
            <GalleryPage/>
            </Suspense>
        )
           },
           {
            path:"admin/login",

            element:
            (
                <Suspense fallback={<LoadingComponent/>}> 
            <LoginAdmin/>
            </Suspense>
            )
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
                <Suspense fallback={<LoadingComponent/>}>
                <PrivateRoute>  
            <AdminHomePage/>
            </PrivateRoute>
            </Suspense> 
        )
        },
        {
            path:'gallery',
            element:(
                <Suspense fallback={<LoadingComponent/>}>
                <PrivateRoute>
                    <AdminGalleryPage/>
                </PrivateRoute>
                  </Suspense> 
            )
        },
        {
            path:"profile",
            element:(
                <Suspense fallback={<LoadingComponent/>}>
                <PrivateRoute>
                    <AdminProfilePage/>
                </PrivateRoute>
                </Suspense> 
            )
        },
        {
            path:"dashboard",
            element:(
                <Suspense fallback={<LoadingComponent/>}>
                <PrivateRoute>
                    <AdminDashBoard/>
                </PrivateRoute>
                </Suspense> 
            ),
            children:[
               {
                 path:"",
                 element:(
                    <Suspense fallback={<LoadingComponent/>}>
                    <PrivateRoute>
                 <DashBoardDisplay/>
                 </PrivateRoute>
                 </Suspense> 
                 )
               },
              
            ]
        },
        {
            path:"image-list",
            element:(
                <Suspense fallback={<LoadingComponent/>}>
                <PrivateRoute>
                <AdminImageList/>
                </PrivateRoute>
                </Suspense> 
            )
          }
    ]
    }
    
])