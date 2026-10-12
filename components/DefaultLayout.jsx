import Navbar from "./Navbar"
import { Outlet } from "react-router";

export default function DefaultLayout() {

    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}