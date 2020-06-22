import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./default-layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="full-width-container">
      <a className="jump-to-main" href="#maincontentstart">Jump to main content</a>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main-content full-width-container limited-width-container">
      <span id="maincontentstart" />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
