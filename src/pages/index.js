import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import NonStretchedImage from '../components/nonstretchedimage'
import Content from '../components/content'
import Wave from '../components/wave'
import './index.css'

export default ({ data }) => (
  <div className = 'root-container'>
    <div className = 'image-wrapper'>
        <NonStretchedImage {...data.file.childImageSharp} />
    </div>
    <Content />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_noBase64
            presentationWidth
        }
      }
    }
  }
`