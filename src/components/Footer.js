import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Grid, IconButton, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GithubLogo from "../assets/icons/social/github.svg"
import TwitterLogo from "../assets/icons/social/twitter.svg"
import LinkedinLogo from "../assets/icons/social/linkedin.svg"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main
  },
  footer: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1440px"
    },
    maxWidth: "960px",
    margin: "auto",
    lineHeight: theme.typography.pxToRem(28),
    fontSize: theme.typography.pxToRem(16)
  },
  footerText: {
    color: theme.palette.background.default
  },
  mainColumnClassName: {
    [theme.breakpoints.down("sm")]: {
      order: 10,
      "& > div > div": {
        paddingTop: 0
      }
    },
    paddingBottom: theme.spacing(1),
  },
  columnClassName: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  companyTitle: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3),
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.main
  }
}))

const connections = [
  {
    name: "Github",
    logo: GithubLogo,
    link: "https://github.com/right-folks"
  }, {
    name: "Linkedin",
    logo: LinkedinLogo,
    link: "https://www.linkedin.com/company/right-folks"
  }, {
    name: "Twitter",
    logo: TwitterLogo,
    link: "https://twitter.com/RightFolks"
  }
]

const columns = [
  [
    {
      link: "#",
      title: "Hello world"
    },
    {
      link: "#",
      title: "What do you do"
    }
  ],
  [
    {
      link: "#",
      title: "Hello world"
    },
    {
      link: "#",
      title: "What do you do"
    }
  ],
  [
    {
      link: "#",
      title: "Hello world"
    },
    {
      link: "#",
      title: "What do you do"
    }
  ]
]

function getColumn(items, columnClassName, footerText) {
  return (
    <div className={columnClassName}>
      {
        items.map(column => (
          <Link
            key={column.title}
            className={footerText}
            to={column.link}
            underline={"none"}
          >
            {column.title}
          </Link>
        ))
      }
    </div>
  )
}

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.wrapper}>
      <Grid
        container
        justify={"space-between"}
        alignItems={"flex-start"}
        className={classes.footer}
      >
        <div className={classes.companyTitle}>
          RightFolks
        </div>
      </Grid>
      <Grid
        container
        justify={"space-between"}
        alignItems={"flex-start"}
        className={classes.footer}
      >
        <Grid
          className={classes.mainColumnClassName}
          item
          xs={12}
          sm={12}
          md={9}
          lg={9}
        >
          <Grid
            container
            direction={"column"}
          >
            <div className={classes.columnClassName}>
              <Grid item>
              <Typography
                className={classes.footerText}
              >
                RightFolks delivers sophisticated web and mobile solutions for
                private individuals, startups and established enterprises at a reasonable price
              </Typography>
              </Grid>
              <Grid item style={{paddingTop: "16px"}}>
              <Typography
                className={classes.footerText}
              >
                ©RightFolks PTY LTD 2020. All rights reserved
              </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid
            container
            direction={"row"}
            style={{ paddingLeft: "12px" }}
          >
            {
              connections.map(connection =>
                <Grid item>
                  <IconButton
                    variant="link"
                    color="default"
                    href={connection.link}
                  >
                    {
                      React.createElement(connection.logo, {
                        style: {
                          width: "24px",
                          height: "24px"
                        }
                      })
                    }
                  </IconButton>
                </Grid>
              )
            }
          </Grid>
        </Grid>

        {
          [].map(column => (
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
              >
                <Grid
                  container
                  direction={"column"}
                >
                  {getColumn(column, classes.columnClassName, classes.footerText)}
                </Grid>
              </Grid>
            )
          )
        }
      </Grid>
    </footer>
  )
}

export default Footer
