import * as React from "react"
import { Link } from 'gatsby'
import {container, imgCard} from "./gallery.module.css"

const Gallery = () =>{

  return(
    <main className={container}>
      <div className={imgCard}>
        <img src="images/gallery1.jpg" alt='Delicious Croissant'/>
      </div>
      <div className={imgCard}>
        <img src="images/gallery2.jpg" alt='under the glass'/>
      </div>
      <div className={imgCard}>
        <img src="images/gallery3.jpg" alt='goodies'/>
      </div>
      <div className={imgCard}>
        <img src="images/gallery4.jpg" alt='more goodies'/>
      </div>
      <div className={imgCard}>
        <img src="images/gallery5.jpg" alt='cakes'/>
      </div>
      <div className={imgCard}>
        <img src="images/gallery6.jpg" alt='flaky'/>
      </div>
    </main>



  )
}

export default Gallery;
