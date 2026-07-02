import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { HomePage } from "./rematedeterrenos/pages/HomePage";
import { ProyectoPage } from "./rematedeterrenos/pages/ProyectoPage";
import { RemateLayout } from "./rematedeterrenos/layout/RemateLayout";
import { TerminosCondiciones } from "./rematedeterrenos/pages/TerminosCondiciones";
import { PoliticaPrivacidad } from "./rematedeterrenos/pages/PoliticaPrivacidad";


const appRouter = createBrowserRouter([
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
            },
            {
                path: "terminos-y-condiciones",
                element: <TerminosCondiciones />
            },
            {
                path: "politica-de-privacidad",
                element: <PoliticaPrivacidad />
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