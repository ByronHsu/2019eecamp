import React from "react"
import { Helmet } from "react-helmet"
import icon from '../images/favicon-96x96.png'
import c1 from '../images/c1.jpg'

const siteUrl = 'https://byronhsu.github.io/2019eecamp/'
const title = 'Evolve 2019eecamp'
const Meta = () => (
    <Helmet defaultTitle={title}>
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href={icon} />
        <link rel="icon" type="image/png" sizes="192x192" href={icon} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={c1} />
    </Helmet>
)

export default Meta