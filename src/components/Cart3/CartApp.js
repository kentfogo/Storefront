import React, { useState } from 'react'
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import "./cart.scss"


function CartApp(props) {
  const {products} = data;
  const [ cartItems, setCartItems ] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else { setCartItems([...cartItems, {...product, qty: 1 }]);
  }
};
const onRemove = (product) =>{
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else{
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty -1 } :x
      )
    );
  }
};
return (props.trigger) ? (
  <div className="CartApp">
    <Header countCartItems={ cartItems.length }></Header>
    <div className="row">
      <Main products={products} onAdd={onAdd}></Main>
      <Basket
        cartItems={cartItems}
        onAdd={ onAdd }
        onRemove= {onRemove}
        ></Basket>
        { props.children }
    </div>
  </div>
) : "";
}

export default CartApp;
