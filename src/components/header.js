import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { AppBar, Grid } from "@material-ui/core"
import Nav from "./nav"
import ElevationScroll from "./ElevationScroll"

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.background.default
    }
  })
)

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <ElevationScroll elevation={3}>
      <AppBar
        className={classes.appBar}
        position={"sticky"}
      >
        <header>
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
                </Grid>
              </Grid>
            </Grid>
          </div>
        </header>
      </AppBar>
    </ElevationScroll>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
