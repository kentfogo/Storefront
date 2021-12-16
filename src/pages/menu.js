import * as React from "react"
import { Link } from 'gatsby'
import MenuLayout from '../components/MenuPage'
import Footer from '../components/footer'
import Layout from '../components/layout/layout'
import { menu } from "./menu.module.css"

const Menu = () => {
  return (
    <main className = {menu}>

      <Layout />
       <Footer />
    </main>
  )
}

export default Menu;
