import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"



const Layout = () => {
  return (
    <div>
        <nav>
            <Navbar className="hidden md:flex" />
        </nav>
        
        
        <Outlet />

        <footer>

        </footer>
    </div>
  )
}

export default Layout;
