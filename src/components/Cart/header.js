import React from "react";
import { Link } from "gatsby";
import { row, colOne, colTwo, block, rowCenter, badge, add, remove } from "./cartelements.module.css";
import cx from 'classnames';


const Header = (props) => {
  const {countCartItems} = props;
  return(
  <header className={cx(row, block, rowCenter)}>
    <div>
      <Link to="#/">
        <h1>Small Shopping Cart</h1>
      </Link>
    </div>
    <div>
      <Link to="#/cart">
      Cart { ''}
      {props.countCartItems ? (
        <button className={badge}>{props.countCartItems}</button>
      ) : (
        ''
      )}</Link>
      <Link to ="#/signin">SignIn</Link>
    </div>
  </header>
  );
};

export default Header;
