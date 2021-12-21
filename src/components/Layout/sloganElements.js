import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
`
export const Button = styled(Link)`
  display: block;
  width: 120px;
  border-radius: 300px;
  padding: 21px 34px;
  margin: .5rem 1rem;
  background: #15cdfc;
  color: #fff;
  border: 2px solid #15cdfc;
  text-align: center;
`

export const Header = styled.div`
  display: block;
  backgound: transparent;
  margin: 0 auto;
  text-align: center;

`
export const Phrase = styled.h1`
  color: #fff;
  text-align: center;
`
