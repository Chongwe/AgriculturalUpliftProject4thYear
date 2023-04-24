import { NavLink, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"
import { Children } from "react"

export default function RootLayout() {
  return (
    <div>
       <Header />
       <div>
       
       </div>
      

          <main>
            <Outlet />
          </main>

        <Footer />
    </div>
  )
}
