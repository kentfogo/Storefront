import react from "React";
import Header from "./header"
import Main from "./main"
import Basket from "./basket"
import data from "./data";

function App() {
  const {products} = data;
  return(
    <div className="App">
      <Header></Header>
      <div className={row}>
        <Main products={products}></Main>
        <Basket></Basket>
        </div>
    </div>
  )
}

export default App;
