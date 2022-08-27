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

export const Head = () => <Seo title="3am Historias" />

export const query = graphql`
  query AllStories {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage
