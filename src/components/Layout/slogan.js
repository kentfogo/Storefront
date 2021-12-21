import React from "react"
import styled from 'styled-components'
import {
  Button,
  Header,
  Phrase,
  Container
} from "./sloganElements"

const Slogan = () =>{
  return(
    <>
      <Header>
        <Phrase>The Boys are Baked. The Goods Are Too.</Phrase>
        <Container>
        <Button>Order Now</Button>
        </Container>
      </Header>
    </>
  )
}

export default Slogan
