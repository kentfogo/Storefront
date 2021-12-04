import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react"



export function Gallery1() {
  return (
    <StaticImage
      src="../images/gallery1.jpg"
      alt="goods"
      placeholder="blurred"
      layout="constrained"
      width= {1000}
      height= {900}
      objectFit= "cover"
      loading="eager"
      

      />
    )
}

export function Gallery2() {
  return (
    <StaticImage
    src="../images/gallery2.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {1000}
    height= {900}
    objectFit= "cover"
    loading="eager"
    style={{ margin: '10px 10px'}}
      />
    )
}

export function Gallery3() {
  return (
    <StaticImage
    src="../images/gallery3.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {1000}
    height= {900}
    objectFit= "cover"
    loading="eager"
    style={{ margin: '10px 10px'}}
      />
    )
}

export function Gallery4() {
  return (
    <StaticImage
    src="../images/gallery4.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {1000}
    height= {900}
    objectFit= "cover"
    loading="eager"
    style={{ margin: '10px 10px'}}
      />
    )
}

export function Gallery5() {
  return (
    <StaticImage
    src="../images/gallery5.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {1000}
    height= {900}
    objectFit= "cover"
    loading="eager"
    style={{ margin: '10px 10px'}}

      />
    )
}

export function Gallery6() {
  return (
    <StaticImage
    src="../images/gallery6.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {1000}
    height= {900}
    objectFit= "cover"
    style=  {{ margin: '10px 10px'}}
    loading="eager"
      />
    )
}
