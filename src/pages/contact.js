import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import ContactFish from '../components/Contact/contact'
import Footer from '../components/footer'
import { contact } from "./contact.module.css"
import GlobalStyle from "../components/globalstyles"

const Contact = () => {
  return (
    <>
    <div className={contact}>
      <Layout />
    </div>
    <ContactFish />
    <Footer />
    </>
  )
}

export default Contact;
