import React from "react"
import styled from 'styled-components'
import {
  Button,
  Header,
  Phrase
} from "./sloganElements"

const Slogan = () =>{
  return(
    <>
      <Header>
        <Phrase>The Boys are Baked. The Goods Are Too.</Phrase>
        <Button>Order Now</Button>
      </Header>
    </>
  )
}

export default Slogan
