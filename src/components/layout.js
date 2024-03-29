/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"


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
    <div
    style={{ width:"100%", overflowX: "hidden",  fontFamily: "'Open Sans', sans-serif",}}
    >
      <Header/>
      <div>
        {children}
      </div>
    
    </div>
  )
}

export default Layout
