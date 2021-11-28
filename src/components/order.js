import * as React from "react"
import { Link } from 'gatsby'
import {container, button, buttonCon, info, line } from "./order.module.css"

const OrderDiv = () =>{
  const hLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5
      }}
      />
  );

  return(
    <main className={container}>
      <div className={buttonCon}>
        <button className={button}>Order Now</button>
      </div>
      <div className={info}>
        <h3>HOURS - MON-FRI 7AM - 5PM, SAT 7AM-4PM, CLOSED SUN.</h3>
        <h3>*BREAKFAST SERVED FROM 7AM-11AM</h3>
        <h3>*LUNCH SERVED FROM 11AM-3PM</h3>
        <h3>PICK-UP IN STORE OR DELIVERY!</h3>
        <h3>WE STILL OFFER CURBSIDE AT ARRIVAL (423) 756-0303</h3>
      </div>
      <div>
        <hr></hr>
      </div>
    </main>



  )
}

export default OrderDiv;
