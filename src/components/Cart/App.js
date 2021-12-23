import react, { useState } from "React";
import Header from "./header"
import Main from "./main"
import Basket from "./basket"
import data from "./data";

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState( []);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty+1} : x
      )
    );
  }else {
    setCartItems([...cartItems, {...products, qty: 1 }]);
  }
  }
  return(
    <div className="App">
      <Header></Header>
      <div className={row}>
        <Main onAdd= {onAdd} products={products}></Main>
        <Basket onAdd={onAdd} cartItems={cartItems}></Basket>
        </div>
    </div>
  )
}

export default App;
