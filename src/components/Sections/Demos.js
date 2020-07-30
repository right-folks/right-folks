import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  sectionTitleBox: {
    textAlign: "center",
    marginTop: "16px"
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
    display: "inline"
  }
}))
const DemoSection = () => {
  const classes = useStyles()

  return (
    <>
      <div item className={classes.sectionTitleBox}>
        <Typography
          component={"h2"}
          className={classes.sectionTitle}
        >
          Will be later...
        </Typography>
      </div>
    </>
  )
}

export default DemoSection
