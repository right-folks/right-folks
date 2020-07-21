import React from "react"
import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Image from "../image"

const useStyles = makeStyles((theme) => ({
  technologyWord: {
    fontSize: theme.typography.pxToRem(40),
    color: theme.palette.primary.main
  },
  nothingWord: {
    fontSize: theme.typography.pxToRem(40),
    fontWeight: theme.typography.fontWeightBold
  },
  withoutWord: {
    fontSize: theme.typography.pxToRem(40),
  },
  peopleWord: {
    fontSize: theme.typography.pxToRem(40),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main
  },
  description: {
    color: theme.palette.secondary.main,
    marginTop: '24px'
  }
}))

const MainSection = ({ text }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify={"space-between"}
      alignItems={"center"}
    >
      <Grid item xs={6} className={classes.sectionTitleBox}>
        <Typography
          component={"h2"}
          className={classes.sectionTitle}
        >
          <span className={classes.technologyWord}>Technology</span> <span className={classes.nothingWord}>is nothing.</span>
        </Typography>
        <Typography
          component={"h2"}
          className={classes.sectionTitle}
        >
          <span className={classes.withoutWord}>Without</span> <span className={classes.peopleWord}>Right People.</span>
        </Typography>

        <Box className={classes.description}>
        <Typography component={"h3"}>
          RF is an outsourcing software development company,
          involving experienced professionals to build innovative solutions for a fair price.
        </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <div style={{maxWidth:'300px', margin: 'auto'}}>
        <Image/>
        </div>
      </Grid>
    </Grid>
  )
}

export default MainSection
