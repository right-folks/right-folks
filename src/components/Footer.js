import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main
  },
  footer: {
    maxWidth: "960px",
    padding: "24px",
    margin: 'auto',
  },
  linkClassName: {
    color: theme.palette.background.default
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

function getColumn(items, linkClassName) {
  return (
    <>
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
    </>
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
          xs={5}
          direction={"column"}
        >
          <Grid
            container
            direction={"column"}
          >
            {
              getColumn(mainColumnItems, classes.linkClassName)
            }
          </Grid>
        </Grid>

        {
          columns.map(column => (
              <Grid
                item
                direction={"column"}
                xs={2}
              >
                <Grid
                  container
                  direction={"column"}
                >
                  {getColumn(column, classes.linkClassName)}
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
