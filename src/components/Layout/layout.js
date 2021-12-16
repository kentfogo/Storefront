import { useState } from "react"
import React from 'react'
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, span, heading, button} from "./layout.module.css";


import styled from 'styled-components';

const Layout = ({ pageTitle,  pageHeading, children }) => {

  return(

    <>
      <ul>
        <div className = {menu}>
          <li><Link to="/menu">Menu</Link></li>
        </div>
        <div className = {product}>
          <li><Link to="/product">Products</Link></li>
        </div>

      </ul>

    </>

  )
}

export default Layout;
