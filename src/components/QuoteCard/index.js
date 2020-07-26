import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default function QuoteCard({
                                    fullName,
                                    jobTitle,
                                    quote
                                  }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader/>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {quote}
        </Typography>
      </CardContent>
    </Card>
  )
}
