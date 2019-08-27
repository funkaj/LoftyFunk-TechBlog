import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import "./layout.css"

library.add(fab, faGithubAlt)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[{ name: "description", content: "My fav blog" }]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
)

export default Layout
