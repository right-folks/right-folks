import React from "react"
import QuoteCard from "../QuoteCard"
import { Grid } from "@material-ui/core"

const Leaders = ({
                   leaders
                 }) => {
  return (
    leaders.map(cardData => {
      const {
        fullName,
        jobTitle,
        quote,
        avatarUrl
      } = cardData

      return (
        <Grid
          key={cardData.id}
          item
        >
          <QuoteCard
            avatarUrl={avatarUrl}
            fullName={fullName}
            jobTitle={jobTitle}
            quote={quote}
          />
        </Grid>
      )
    })
  )
}

export default Leaders
