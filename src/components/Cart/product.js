import React from 'react'
import { row, colOne, colTwo, block, rowCenter, badge, add, remove, small } from "./cartelements.module.css"

function Product(props) {
  const { product, onAdd } = props;
  return(
    <div>
      <img className={small} src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={()=> onAdd(product)}>Add To Cart</button>
      </div>
    </div>

  );
};

export default Product
