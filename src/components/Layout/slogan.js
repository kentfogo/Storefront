import React from "react"
import Link from "gatsby"
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
        <Button to="">Order Now</Button>
        </Container>
      </Header>
    </>
  )
}

export default Slogan
