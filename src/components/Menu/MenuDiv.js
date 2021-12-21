import * as React from "react"
import { Link } from 'gatsby'
import { container, buttonContainer, button, orderButton } from "./menudiv.module.scss";


const MenuDiv = () =>{
  return(
    <main className={container}>
      <h1>Menus</h1>
    {/* Desserts Button*/}
    <div className={buttonContainer}>
      <button className={button}>Desserts</button>
      <button className={button}>Brunch</button>
      <button className={orderButton}>Order Now</button>
    </div>

    {/*Brunch Button*/}



    </main>
  )
}

export default MenuDiv;
