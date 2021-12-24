import React from "react"
import Product from './Product'
import { row, colOne, colTwo, block, rowCenter, badge, add, remove } from "./cartelements.module.css"
import cx from 'classnames'

function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className={cx(block, colTwo)}>
      <h2>Products</h2>
      <div className={row}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

export default Main
