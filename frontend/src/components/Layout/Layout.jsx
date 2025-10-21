import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"



const Layout = () => {
  return (
    <div>
        <nav>
            <Navbar />
        </nav>
        
        
        <Outlet />

        <footer>

        </footer>
    </div>
  )
}

export default Layout;
