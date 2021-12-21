import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import NavBar from '../components/Contact/index'
import ContactForm from '../components/Contact/contactform2'
import Footer from '../components/footer'
import { contact } from "./contact.module.css"
import GlobalStyle from "../components/globalstyles"

const Contact = () => {
  return (
    <>
    <div className={contact}>
      <Layout />
    </div>
    <ContactForm />
    <Footer />
    </>
  )
}

export default Contact;
