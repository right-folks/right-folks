import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  sectionTitleBox: {
    textAlign: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(36),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    display: "inline",
  },
  divider: {
    height: "2px",
    width: "64px",
    margin: "auto",
    backgroundColor: theme.palette.secondary.main
  }
}))

const SectionTitle = ({ text }) => {
  const classes = useStyles()

  return <>
    <Grid item className={classes.sectionTitleBox}>
      <Typography
        component={"h2"}
        className={classes.sectionTitle}
      >
        {text}
      </Typography>
      <Divider
        className={classes.divider}
        light={false}
      />
    </Grid>
  </>
}

export default SectionTitle
