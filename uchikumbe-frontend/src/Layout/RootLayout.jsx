import { NavLink, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"

export default function RootLayout() {
  return (
    <div>
       <Header />
       <Home />
       <Footer />


    </div>
  )
}
