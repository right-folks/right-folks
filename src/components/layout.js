/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.background.default
    },
    main: {
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1440px"
      },
      maxWidth: "960px",
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`
    }
  })
)

const Layout = ({ children }) => {
  const classes = useStyles()

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
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div className={classes.main}>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
