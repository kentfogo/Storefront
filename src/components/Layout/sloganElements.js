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
  text-decoration: none;

  &:hover{
    background-color: rgba(21, 205, 252, .8);
    transition: background 200ms ease-in, color 200ms ease-in
  }
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
