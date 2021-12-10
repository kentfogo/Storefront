import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import NavBar from '../components/Contact/index'
import ContactForm from '../components/Contact/contactform2'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <main>
    <NavBar />
    <ContactForm />
    <Footer />
    </main>
  )
}

export default Contact;
