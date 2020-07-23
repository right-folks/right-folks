import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main
  },
  footer: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: "1440px",
    },
    maxWidth: "960px",
    margin: 'auto',
  },
  linkClassName: {
    color: theme.palette.background.default
  },
  columnClassName: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  }
}))

const mainColumnItems = [
  {
    link: "#",
    title: "Great Organisation"
  },
  {
    link: "#",
    title: "Great expectations"
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

function getColumn(items, columnClassName, linkClassName) {
  return (
    <div className={columnClassName}>
      {
        items.map(column => (
          <Link
            key={column.title}
            className={linkClassName}
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
        <Grid
          item
          xs={6}
          sm={5}
          md={5}
          lg={5}
        >
          <Grid
            container
            direction={"column"}
          >
            {
              getColumn(mainColumnItems, classes.columnClassName, classes.linkClassName)
            }
          </Grid>
        </Grid>

        {
          columns.map(column => (
              <Grid
                item
                xs={6}
                sm={2}
                md={2}
                lg={2}
              >
                <Grid
                  container
                  direction={"column"}
                >
                  {getColumn(column, classes.columnClassName, classes.linkClassName)}
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
