import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import OrderDiv from '../components/order'
import Footer from '../components/footer'

const Homepage = () => {
  return (
    <>


      <Layout  pageTitle='Home' />
        <Header />
        <OrderDiv />
        <Footer />



    </>


  )
}

export default Homepage;
