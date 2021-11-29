import { React, useState } from "react"
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, span, heading, button, bar, hamburger} from "./layout.module.css";
import Burger from "./burger.js"
import styled from 'styled-components';

//const hamburger = document.querySelector("hamburger");
//const navMenu = document.querySelector("nav-menu");

//hamburger.addEventListener("click", mobileMenu);

//function mobileMenu() {
//  hamburger.classList.toggle("active");
//  navMenu.classList.toggle("active");
//}

//const navLinks = document.querySelectionAll(".navLinks");

//navLinks.forEach(n=> n.addEventListener("click", closeMenu));

//function closeMenu() {
  //hamburger.classList.remove("active");
  //navMenu.classList.remove("active");
//}

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
        <Burger />
      </nav>
      <h1>The Goods Are Baked. But the Baked Are Boys.</h1>
      <button className={button}>Order Now</button>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

export default Layout;
