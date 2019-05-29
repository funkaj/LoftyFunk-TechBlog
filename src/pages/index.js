import React from "react"
import { Link, graphql } from "gatsby"
import "./post.css"
import Layout from "../components/layout"

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <div style={{ backgroundColor: "#F7FFF7", height: "100vh" }}>
      <Layout>
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} key={i} className="link">
            <div className="post-list">
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </Layout>
    </div>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
