import React from "react"
import Link from "gatsby"
import {row, block, center} from "/cart.module.css"

export default function Header(props) {
  const {countCartItems} = props;
  return(
  <header className={row block center}>
    <div>
      <Link to="">
        <h1>Small Shopping Cart</h1>
      <Link>
    </div>
    <div>
      <Link to="#/cart">
      Cart { ''}
      {countCartItems ? (
        <button className={badge}>{countCartItems}</button>
      ) : (
        ''
      )}</Link>
      <Link to ="#/signin">SignIn</Link>
    </div>
  </header>
  );
};
