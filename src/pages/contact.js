import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import NavBar from '../components/Navbar/index'
import ContactForm from '../components/Contact/contactform'

const Contact = () => {
  return (
    <main>
    <NavBar />
    <ContactForm />
    </main>
  )
}

export default Contact;
