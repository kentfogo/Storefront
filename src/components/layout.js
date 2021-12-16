import { useState } from "react"
import React from 'react'
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, span, heading, button} from "./layout.module.css";


import styled from 'styled-components';

const Layout = ({ pageTitle,  pageHeading, children }) => {

  const activeStyles = {
    color: 'red'
  }

  return(
    <main className = {container}>
    <title>{pageTitle}</title>

      <nav className={nav}>
        <Link to="/" className={navLinks}><span className={span}>Bakery Boys</span></Link>
        <ul className={navMenu }>
          <li><Link to="/menu" className={navLinks}
                activeStyle={activeStyles}>Menu</Link></li>
          <li><Link to="/product" className={navLinks}>Products</Link></li>
          <li><Link to="/about" className={navLinks}>About Us</Link></li>
          <li><Link to="/contact" className={navLinks}>Contact Us</Link></li>

        </ul>

      </nav>





      <h1>The Goods Are Baked. But the Baked Are Boys.</h1>
      <button className={button}>Order Now</button>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

export default Layout;
