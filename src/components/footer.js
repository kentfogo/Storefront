import * as React from "react"
import { Link } from 'gatsby'
import {container, containerInner, siteinfo } from "./footer.module.scss"

const Footer = () =>{
  return(
    <footer className={container}>
      <div className={containerInner}>
      <div className={siteinfo}>
        <p>DAT ASS. 888-888-9008. info@bakery-boyz.com</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer;
