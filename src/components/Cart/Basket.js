import React from "react"
import { row, colOne, colTwo, block, rowCenter, badge, add, remove, textRight } from "./cartelements.module.css"
import cx from 'classnames'

function Basket(props) {
  const { cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price* c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0: 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  return(
  <aside className = {cx(block, colOne)}>
    <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
      {cartItems.map((item)=> (
        <div key={item.id} className={row}>
          <div className={colTwo}>{item.name}</div>
          <div className={colTwo}>
            <button onClick={()=>onAdd(item)} className={add}>+</button>
            <button onClick={()=>onRemove(item)} className={remove}>-</button>{''}
          </div>

          <div className={cx(colTwo, textRight)}>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
    ) )}

    {cartItems.length !==0 && (
    <>
      <hr></hr>
      <div className={row}>
        <div className={colTwo}>Items Price</div>
        <div className={cx(colOne, textRight)}>${itemsPrice.toFixed(2)}</div>
      </div>
      <div className={row}>
        <div className={colTwo}>Tax Price</div>
        <div className={cx(colOne, textRight)}>${taxPrice.toFixed(2)}</div>
      </div>
      <div className={row}>
        <div className={colTwo}>Shipping Price</div>
        <div className={cx(colOne, textRight)}>${shippingPrice.toFixed(2)}</div>

      </div>
      <div className={row}>
        <div className={colTwo}><strong>Total Price</strong></div>
        <div className={cx(colOne, textRight)}>{totalPrice.toFixed(2)}</div>
      </div>

      <hr />
      <div className = {row}>
        <button onCLick={() => alert('Implement Checkout!')}>Checkout</button>
      </div>
    </>
  )}
  </div>
  </aside>


  )
}

export default Basket
