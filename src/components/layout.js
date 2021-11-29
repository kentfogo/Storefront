import * as React from "react"
import { Link } from 'gatsby'
import { container, nav, navMenu, navLinks, span, heading, button} from "./layout.module.css"

const Layout = ({ pageTitle,  pageHeading, children }) => {
  return(
    <main className = {container}>
    <title>{pageTitle}</title>
      <nav className={nav}>
        <Link to="/" className={navLinks}><span className={span}>Bakery Boys</span></Link>
        <ul className={navMenu}>
        <li><Link to="/menu" className={navLinks}>Menu</Link></li>
        <li><Link to="/products" className={navLinks}>Products</Link></li>
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
