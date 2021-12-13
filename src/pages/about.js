import * as React from "react";
import { Link } from 'gatsby'
import Navbar from '../components/about/index.js'
import AboutPage from "../components/About/content"

const About = () => {
  return (
    <main>
    <Navbar />
    <AboutPage />
    </main>
  );
};

export default About;
