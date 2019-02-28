import React from "react"
import { graphql } from "gatsby"
import NonStretchedImage from '../components/nonstretchedimage'
import Content from '../components/content'
import Meta from '../components/meta'
import './index.css'

export default ({ data }) => (
  <div>
    <Meta/>
    <div className = 'root-container'>
        <div className = 'image-wrapper'>
            <NonStretchedImage {...data.logo.childImageSharp} />
        </div>
        <Content />
    </div>
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