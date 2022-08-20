import * as React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import Seo from "components/seo"
import List from "components/list"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <List stories={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="3Am Historias" />

export const query = graphql`
  query AllStories {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
