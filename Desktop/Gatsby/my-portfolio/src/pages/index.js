import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Awkward Dawg...</h1>
    <p>The Great Gatsby is in a spacesuit.</p>
    <p>What is on his plate??</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">GTFOH</Link>
  </Layout>
)

export default IndexPage
