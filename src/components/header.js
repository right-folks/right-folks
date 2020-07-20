import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import Nav from "./nav"

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#233348",
    fontFamily: theme.typography.h2.fontFamily,
    textDecoration: `none`
  }
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <header
      style={{
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <Grid
          container
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <h2 style={{ margin: 0 }}>
              <Link
                to="/"
                className={classes.link}
                underline={"none"}
              >
                {siteTitle}
              </Link>
            </h2>
          </Grid>
          <Grid item>
            <Grid container>
              <Nav/>
              {/*// <Grid item>*/}
              {/*  <Link*/}
              {/*    to="/"*/}
              {/*    className={classes.link}*/}
              {/*    underline={"none"}*/}
              {/*  >*/}
              {/*    AA*/}
              {/*  </Link>*/}
              {/*</Grid>*/}
              {/*<Grid item>*/}
              {/*  <Link*/}
              {/*    to="/"*/}
              {/*    className={classes.link}*/}
              {/*    underline={"none"}*/}
              {/*  >*/}
              {/*    BB*/}
              {/*  </Link>*/}
              {/*</Grid>*/}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
