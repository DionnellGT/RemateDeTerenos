import { Footer } from "../components/Footer"
import {NavbarRemate} from "../components/NavbarRemate"
import { Outlet } from "react-router"

export const RemateLayout = () => {  


    return (
        <div className="min-h-screen">
            <NavbarRemate />
            <Outlet/>
            <Footer />

        </div>
    )
}