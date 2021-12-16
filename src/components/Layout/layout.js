import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Button
} from "./NavbarElements"
 import styled from 'styled-components';

const Layout = ({ pageTitle,  pageHeading, children }) => {

  const activeStyles = {
    color: '#fff',
    backgroundColor:'#15cdfc',
    height: '30px'
  }

    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    useEffect(() => {
      changeNav()
      window.addEventListener("scroll", changeNav)
    }, [])

  return(
    <>
    <IconContext.Provider value={{ color: "#141414" }}>
      <Nav active={scroll} click={click}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            Baked Boys
          </NavLogo>
          <MobileIcon onClick={handleClick} >
            {click ? <FaTimes color = "#fff"/> : <FaBars color = "#fff"/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/menu">Menu</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/product">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>


      <h1>The Goods Are Baked. But the Baked Are Boys.</h1>
      <Button>Order Now</Button>
      

    </>
  )
}

export default Layout;
