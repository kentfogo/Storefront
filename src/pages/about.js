import * as React from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import AboutPage from "../components/About/content"
import Footer from "../components/footer"
import { about } from "./about.module.css"
import GlobalStyle from "../components/globalstyles"

const About = () => {
  return (
    <>
    <div className={about}>
      <Layout />
    </div>
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
