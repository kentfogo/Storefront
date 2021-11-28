import * as React from "react"
import { Link } from 'gatsby'
import {container, imgCard} from "./gallery.module.css"

const Gallery = () =>{

  return(
    <main className={container}>
      <div className={imgCard}>
        <img src="images/gallery1.jpg" alt='Delicious Croissant'/>
      </div>
      <img src="images/gallery2.jpg" alt='under the glass'/>
      <img src="images/gallery3.jpg" alt='goodies'/>
      <img src="images/gallery4.jpg" alt='more goodies'/>
      <img src="images/gallery5.jpg" alt='cakes'/>
      <img src="images/gallery6.jpg" alt='flaky'/>
    </main>



  )
}

export default Gallery;
