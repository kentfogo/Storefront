import * as React from "react"
import { Link } from 'gatsby'
import { container, buttonContainer, button } from "./menudiv.module.css";

const MenuDiv = () =>{
  return(
    <main className={container}>
      <h1>Menus</h1>
    //Desserts Button
    <div className={buttonContainer}>
      <button className={button}>Desserts</button>
      <button className={button}>Brunch</button>

    </div>

    //Brunch Button



    </main>
  )
}

export default MenuDiv;
