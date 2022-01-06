import * as React from "react"
import Layout from '../components/layout/layout'
import App from "../components/carttest/app"
import Card from '../components/products/cards.js'
import Footer from '../components/footer'
import { product } from "./product.module.css"
import GlobalStyle from "../components/globalstyles"



const Product = () => {
  return (
    <>
    <div className={product}>
      <Layout />
    </div>
    <aside>
      <App />
    </aside>

    <Card />
    <Footer />

    </>
  )
}

export default Product;
