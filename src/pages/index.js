import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Header from '../components/header'
import OrderDiv from '../components/order'
import Gallery from '../components/gallery'
import Footer from '../components/footer'
import Slogan from "../components/layout/slogan"
import { home } from "./index.module.css"




const Homepage = () => {
  return (
    <>
      <div className = {home}>
        <Layout  pageTitle='Home' />
        <Slogan />
      </div>
        <OrderDiv />
        <Gallery />
        <Footer />

    </>


  )
}

export default Homepage;
