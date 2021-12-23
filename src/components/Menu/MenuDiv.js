import * as React from "react"
import { Link } from 'gatsby'
import { container, buttonContainer, button, orderButton } from "./menudiv.module.scss";


const MenuDiv = () =>{
  return(
    <main className={container}>
      <h1>Menus</h1>
    {/* Desserts Button*/}
    <div className={buttonContainer}>
      <button className={button}><Link to="">Desserts</Link></button>
      <button className={button}><Link to="">Brunch</Link></button>
      <button className={orderButton}><Link to="">Order Now</Link></button>
    </div>

    {/*Brunch Button*/}



    </main>
  )
}

export default MenuDiv;
