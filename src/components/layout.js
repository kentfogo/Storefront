import { useState } from "react"
import React from 'react'
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, span, heading, button, hamburger, hamnav, hamItems} from "./layout.module.css";

import styled from 'styled-components';

const Layout = ({ pageTitle,  pageHeading, children }) => {

  return(
    <main className = {container}>
    <title>{pageTitle}</title>

      <nav className={nav}>
        <Link to="/" className={navLinks}><span className={span}>Bakery Boys</span></Link>
        <ul className={navMenu }>
          <li><Link to="/menu" className={navLinks}>Menu</Link></li>
          <li><Link to="/products" className={navLinks}>Products</Link></li>
          <li><Link to="/about" className={navLinks}>About Us</Link></li>
          <li><Link to="/contact" className={navLinks}>Contact Us</Link></li>

        </ul>
      </nav>

      <nav className = {hamnav}>
        <label for = {hamburger}>&#9776;</label>
        <input type = "checkbox" className={hamburger}/>

        <div className={hamItems}>
          <li><Link to="/menu" >Menu</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </div>
      </nav>
      <h1>The Goods Are Baked. But the Baked Are Boys.</h1>
      <button className={button}>Order Now</button>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

export default Layout;
