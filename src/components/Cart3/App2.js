import React, {useState} from 'react'
import PopupCart from './popupcart'
import {popupInner, addBtn, app2, app2Active} from "./popup.module.scss"
import cx from 'classnames';
import "./cart.scss"
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';


const App2 = (props) =>{
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
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

  const [buttonPopup, setButtonPopup] = useState(false);
  const [opaque, setOpaque] = useState(false);

  return(

    <div>
      <main
        onClick={() => {setOpaque(!opaque)}}
        activeOpacity={1}
        style={{opacity: opaque ? 1.0 :.5}}>
        <h1>Popups</h1>
        <br/><br/>
        <button onClick={() =>setButtonPopup(true)}>Add to Cart</button>
      </main>

      <PopupCart trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3> My Popup</h3>
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
          </div>
      </PopupCart>
      </div>


  );
}

export default App2;
