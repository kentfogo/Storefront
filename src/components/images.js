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
    objectFit= 'none'
    objectPosition= {'50% 50%' }
    style=  {{ margin: '10px 10px'}}
    loading="lazy"
    aspectRatio={16/9}
      />
    )
}

export function MenuBanner() {
  return(
    <StaticImage
      src="../images/menuimage.jpg"
      alt="tasty sandwich"
      placeholder="blurred"
      loading="eager"
      layout="fullWidth"
      style = {{
        width: "100%",
        height: "100vh"
      }}
    />
  )
}

export function ApplePie() {
  return (
    <StaticImage
    src="../images/applepie.jpg"
    placeholder="blurred"
    loading="eager"
      />
    )
}

export function Family() {
  return (
    <StaticImage
    src="../images/fam.jpg"
    placeholder="blurred"
    loading="eager"
      />
    )
}

export function Fam() {
  return (
    <StaticImage
    src="../images/fam.jpg"
    alt="goods"
    placeholder="blurred"
    layout="constrained"
    width= {500}
    height= {700}
    objectFit= "cover"
    loading="eager"
    style={{ margin: '10px 10px'}}
      />
    )
}
