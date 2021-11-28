import * as React from "react"
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, navLinkso, heading} from "./layout.module.css"

const Layout = ({ pageTitle,  pageHeading, children }) => {
  return(
    <main className = {container}>
    <title>{pageTitle}</title>
      <nav className={nav}>
        <Link to="/" className={navLinks} >Bakery Boys</Link>
        <ul className={navMenu}>
        <li><Link to="/menu" className={navLinks}>Menu</Link></li>
        <li><Link to="/products" className={navLinks}>Products</Link></li>
        <li><Link to="/about" className={navLinks}>About Us</Link></li>
        <li><Link to="/contact" className={navLinks}>Contact Us</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

export default Layout;
