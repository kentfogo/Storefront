import { Link } from "gatsby"
import { DiScala } from "react-icons/Di"
import styled from "styled-components"
import pastry from "/src/images/dough.jpg"


export const Nav = styled.nav`
/*background: ${({ active }) =>
  active
    ? "#fff"
    : "linear-gradient(to bottom,  rgba(255,255,255, 0.9) 0%,rgba(255,255,255,0) 100%)"};*/

  height: 35vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  /*background-image: url(${pastry});*/
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;


  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "transparent" : "transparent")};
    transition: 0.8s all ease;
    height: auto;
    color: "#fff";
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;


`

export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-family: "Sora", sans-serif;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 100px;
`

export const NavIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;

`

export const MobileIcon = styled.div`
  display: none;


  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: black;

  }
`

export const NavItem = styled.li`
  height: 80px;
  position: relative;
  bottom: 100px;

  @media screen and (max-width: 960px) {
    width: 100%;
    position: relative;
    top: 100px;
  }
`

export const NavLinks = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Sora", sans-serif;
  color: #fff;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #fff;

    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: .5rem 0;
  margin: .5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
`
