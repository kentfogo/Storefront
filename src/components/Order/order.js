import * as React from "react"
import { Link } from 'gatsby'
import {container, button, info, line, words, wrapper } from "./order.module.scss"
import Button from "../layout/slogan"

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
    <main className={wrapper}>
      <section className={container}>
        <div className={info}>
          
          <Button className={button}>Order Now</Button>
        </div>
        <div className={info}>
          <h3>HOURS - MON-FRI 7AM - 5PM, SAT 7AM-4PM, CLOSED SUN.</h3>
          <h3>*BREAKFAST SERVED FROM 7AM-11AM</h3>
          <h3>*LUNCH SERVED FROM 11AM-3PM</h3>
          <h3>PICK-UP IN STORE OR DELIVERY!</h3>
          <h3>WE STILL OFFER CURBSIDE AT ARRIVAL (423) 756-0303</h3>
        </div>
      </section>

    </main>







  )
}

export default OrderDiv;
