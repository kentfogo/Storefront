import React from "react"
import Link from "gatsby"
import {row, block, center} from "/cart.module.css"

export default function Header(props) {
  return(
  <header className={row block center}>
    <div>
      <Link to="">
        <h1>Small Shopping Cart</h1>
      <Link>
    </div>
    <div>
      <Link to="#/cart">Cart</Link> <Link to ="#/signin">SignIn</Link>
    </div>
  </header>
  );
};
