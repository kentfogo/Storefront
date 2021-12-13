import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react"


export function Family() {
  return (
    <StaticImage
    src="../components/images/fam.jpg"
    placeholder="blurred"
    loading="eager"
      />
    )
}
