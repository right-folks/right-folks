import React from "react"
import { Avatar, Box, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.grey["200"],
    marginTop: theme.spacing(8),
  },
  fullName: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    lineHeight: "150%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1.5)
  },
  position: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    fontStyle: "oblique",
    lineHeight: "150%",
    textAlign: "center",
    paddingBottom: theme.spacing(3)
  },
  message: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.typography.pxToRem(26),
    textAlign: "center",
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(3),
    },
  },
  large: {
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    width: theme.spacing(16),
    height: theme.spacing(16),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
    marginTop: "-136px",
  },
  circle: {
    borderRadius: theme.spacing(9),
    backgroundColor: theme.palette.background.default,
    width: theme.spacing(18),
    height: theme.spacing(18),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 'auto',
    marginTop: "-96px"
  }
}))

const TestimonialCard = ({
                           fullName,
                           position,
                           message,
                           avatarUrl
                         }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.card}>
      <div className={classes.circle}>
      </div>
      <Avatar
        alt={classes.fullName}
        src={avatarUrl}
        className={classes.large}/>
      <Typography className={classes.fullName}>
        {fullName}
      </Typography>
      <Typography component={"h2"} className={classes.position}>
        {
          position
        }
      </Typography>
      <Typography className={classes.message}>
        {
          message
        }
      </Typography>
    </Paper>
  )
}

export default TestimonialCard
