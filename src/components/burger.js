import { useState } from "react"
import React from 'react'
import { styledBurger } from "./burger.module.css";
import styled from 'styled-components';



const Burger = () =>{
  const [open, setOpen] = useState(false)

  return(

    <div className = {styledBurger} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />

    </div>
  );
};

export default Burger;
