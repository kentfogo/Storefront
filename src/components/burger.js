import { React, useState } from "react";
import { styledBurger } from "./burger.module.css";
import styled from 'styled-components';



const Burger = () =>{
  const [open, setOpen] = useState(false)

  return(

    <div className = {styled-burger} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />

    </div>
  );
};

export default Burger;
