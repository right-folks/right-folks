import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar, Card, CardContent, CardHeader } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    margin: "auto",
    marginBottom: "8px"
  },
  header: {
    height: theme.spacing(20),
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius: theme.spacing(2),
    borderTopLeftRadius: theme.spacing(2)
  },
  avatar: {
    backgroundColor: red[500]
  },
  divider: {
    height: "8px",
    display: "block",
    backgroundColor: theme.palette.primary.main
  },
  fullName: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    lineHeight: "150%",
    paddingBottom: theme.spacing(1)
  },
  position: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    fontStyle: "oblique",
    lineHeight: "150%",
    textAlign: "center",
    paddingBottom: theme.spacing(1),
    "& > a": {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightMedium,
      fontStyle: "oblique",
      lineHeight: "150%"
    }
  },
  message: {
    position: "relative",
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.typography.pxToRem(26),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(3)
    },
    "&::before": {
      content: "open-quote",
      fontSize: theme.typography.pxToRem(64),
      color: theme.palette.primary.main
    },
    "&::after": {
      position: "absolute",
      bottom: `-${theme.typography.pxToRem(24)}`,
      content: " close-quote",
      whiteSpace: "pre",
      fontSize: theme.typography.pxToRem(64),
      color: theme.palette.primary.main
    }
  },
  profileIcon: {
    boxShadow: theme.shadows[0],
    width: theme.spacing(31),
    height: theme.spacing(31),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  circle: {
    borderRadius: theme.spacing(16),
    backgroundColor: theme.palette.background.default,
    width: theme.spacing(32),
    height: theme.spacing(32),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: `-${theme.spacing(18)}px`,
    boxShadow: theme.shadows[2]
  }
}))

export default function QuoteCard({
                                    fullName,
                                    jobTitle,
                                    avatarUrl,
                                    quote
                                  }) {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
    >
      <CardHeader className={classes.header}>
      </CardHeader>
      <span className={classes.divider}></span>
      <div className={classes.circle}>
        <Avatar
          component={"span"}
          alt={fullName}
          src={avatarUrl}
          className={classes.profileIcon}
        />
      </div>
      <CardContent>
        <Typography className={classes.fullName}>
          {fullName}
        </Typography>
        <Typography component={"h2"} className={classes.position}>
          {jobTitle}
        </Typography>
        <Typography className={classes.message}>
          {quote}
        </Typography>
      </CardContent>
    </Card>
  )
}
