import React from "react"
import { graphql } from "gatsby"
import NonStretchedImage from '../components/nonstretchedimage'
import Content from '../components/content'
import './index.css'

export default ({ data }) => (
  <div className = 'root-container'>
    <div className = 'image-wrapper'>
        <NonStretchedImage {...data.logo.childImageSharp} />
    </div>
    <Content />
  </div>
)

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
            presentationWidth
        }
      }
    }
  }
`