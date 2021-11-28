import * as React from "react"
import { Link } from 'gatsby'
import {container, button } from "./header.module.css"

const Header = () =>{
  return(
    <main className={container}>
      <h1>The Goods Are Baked. But the Baked Are Boys.</h1>
      <button className={button}>Order Now</button>
    </main>
  )
}

export default Header;
