import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import OrderDiv from '../components/order'
import Gallery from '../components/gallery'
import Footer from '../components/footer'



const Homepage = () => {
  return (
    <>


      <Layout  pageTitle='Home' />
        <OrderDiv />
        <Gallery />
        <Footer />
    </>


  )
}

export default Homepage;
