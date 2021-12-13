import * as React from "react";
import { Link } from 'gatsby'
import Navbar from '../components/about/index.js'
import AboutPage from "../components/About/content"
import Footer from "../components/footer"

const About = () => {
  return (
    <main>
    <Navbar />
    <AboutPage />
    <Footer />
    </main>
  );
};

export default About;
