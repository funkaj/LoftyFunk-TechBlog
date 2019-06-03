import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Metatags from "../components/Metatags"
import Icon from "../images/gatsby-icon.png"
import { graphql } from "gatsby"

function BlogPost(props) {
  const post = props.data.markdownRemark
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description, author } = post.frontmatter
  const thumbnail =
    post.frontmatter.image && post.frontmatter.image.childImageSharp.resize.src

  return (
    <Layout>
      <Metatags
        title={title}
        author={author}
        description={description}
        thumbnail={thumbnail ? url + thumbnail : url + Icon}
        url={url}
        pathname={props.location.pathname}
      />
      <div>
        <h1>{title}</h1>
        <p>By: {author}</p>
        {thumbnail && (
          <Img
            style={{ width: "500px", margin: `0 auto` }}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        description
        image {
          childImageSharp {
            resize(width: 500, height: 500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
