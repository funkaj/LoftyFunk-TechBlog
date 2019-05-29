import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "#292F36",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#FFE66D",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <a
        href="https://github.com/funkaj/LoftyFunk-TechBlog"
        style={{
          color: "#FFE66D",
          float: "right",
          marginTop: -50,
          textDecoration: "none",
        }}
        title="github"
        target="blank"
      >
        <i class="fab fa-github-alt fa-3x" />
      </a>
    </div>
  </div>
)

export default Header
