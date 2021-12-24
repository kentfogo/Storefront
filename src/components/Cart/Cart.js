import React , {useState} from "react";
import Main from "./Main";
import Basket from "./Basket";
import Header from "./Header"
import data from "./data";
import cx from 'classnames';
import { row, colOne, colTwo, block, rowCenter, badge, add, remove } from "./cartelements.module.css"


const Cart = () => {
  const {products} = data;
  const [cartItems, setCartItems] = useState( []);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      )
    );
  }else {
    setCartItems([...cartItems, {...products, qty: 1 }]);
  }
};
const onRemove = (product) => {
   const exist = cartItems.find((x) => x.id === product.id);
   if (exist.qty === 1) {
     setCartItems(cartItems.filter((x) => x.id !== product.id));
   } else {
     setCartItems(
       cartItems.map((x) =>
         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
       )
     );
   }
 };
  return(
    <div className="Cart">
      <Header countCartItems={cartItems.length}></Header>
      <div className={row}>
        <Main onAdd= {onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
    </div>
  )
}

export default Cart;
