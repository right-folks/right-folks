import React from "react"
import { Avatar, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3)
    },
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.grey["200"],
    marginTop: theme.spacing(8)
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
    paddingBottom: theme.spacing(3),
    '& > a' : {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightMedium,
      fontStyle: "oblique",
      lineHeight: "150%",
    }
  },
  message: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.typography.pxToRem(26),
    textAlign: "center",
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(3)
    }
  },
  profileUrl: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "-136px",
  },
  large: {
    boxShadow: theme.shadows[3],
    width: theme.spacing(16),
    height: theme.spacing(16),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  circle: {
    borderRadius: theme.spacing(9),
    backgroundColor: theme.palette.background.default,
    width: theme.spacing(18),
    height: theme.spacing(18),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "-96px",
  }
}))

const TestimonialCard = ({
                           fullName,
                           position,
                           companyName,
                           message,
                           avatarUrl,
                           profileUrl,
                           companyUrl
                         }) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.card}
      elevation={4}
    >
      <div className={classes.circle}>
      </div>
      <a
        className={classes.profileUrl}
        href={profileUrl}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <Avatar
          component={'span'}
          alt={classes.fullName}
          src={avatarUrl}
          className={classes.large}
        />
      </a>
      <Typography className={classes.fullName}>
        {fullName}
      </Typography>
      <Typography component={"h2"} className={classes.position}>
        {
          `${position} at `
        }
        <a
          href={companyUrl}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          {companyName}
        </a>
      </Typography>
      <Typography className={classes.message}>
        "{
        message
      }"
      </Typography>
    </Paper>
  )
}

export default TestimonialCard
