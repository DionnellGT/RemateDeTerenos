import { createHashRouter, Navigate, RouterProvider } from "react-router";
import { HomePage } from "./rematedeterrenos/pages/HomePage";
import { ProyectoPage } from "./rematedeterrenos/pages/ProyectoPage";
import { RemateLayout } from "./rematedeterrenos/layout/RemateLayout";


const appRouter = createHashRouter([
    //Public routes
    { 
        path: '/',
        element: <RemateLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'proyectos/:idSlug',
                element: <ProyectoPage/>
            }
        ]
    },

    {
        path: '*',
        element: <Navigate to='/' />
    },
])

export function AppRouter() {
  return <RouterProvider router={appRouter} />
}