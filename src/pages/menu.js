import * as React from "react"
import { Link } from 'gatsby'
import MenuDiv from '../components/Menu/MenuDiv'
import Footer from '../components/footer'
import Layout from '../components/layout/layout'
import { menu } from "./menu.module.css"

const Menu = () => {
  return (
    <>
      <div className = {menu}>
        <Layout pageTitle='Menu'/>
      </div>
      <MenuDiv />
      <Footer />

    </>
  )
}

export default Menu;
