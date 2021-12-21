import * as React from "react"
import { Link } from 'gatsby'
import {container } from "./gallery.module.css"
import { StaticImage } from "gatsby-plugin-image";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6  } from "../images.js";




const Gallery = () =>{

  return(
    <main className={container}>
        <Gallery1 />
        <Gallery2 />
        <Gallery3 />
        <Gallery4 />
        <Gallery5 />
        <Gallery6 />
    </main>



  )
}

export default Gallery;
