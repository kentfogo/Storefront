import React from "react";
import { Link } from "gatsby";
import { row, colOne, colTwo, block, rowCenter, badge, add, remove } from "./cartelements.module.css";
import cx from 'classnames';


const Header = (props) => {
  const {countCartItems} = props;
  return(
  <header className={cx(row, block, rowCenter)}>
    <div>
      <a href="#/">
        <h1>Small Shopping Cart</h1>
      </a>
    </div>
    <div>
      <a href="#/cart">
      Cart{''}
      {props.countCartItems ? (
        <button className={badge}>{props.countCartItems}</button>
      ) : (
        ''
      )}</a>{''}
      <a href="#/signin">SignIn</a>
    </div>
  </header>
  );
};

export default Header;
