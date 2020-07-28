import React from "react"
import QuoteCard from "../QuoteCard"
import { Grid } from "@material-ui/core"

const data = [
  {
    id: 1,
    fullName: "Incognito Name1",
    jobTitle: "Founder, CTO",
    quote: `
Don't overestimate technologies.
People always be more important.
Right person around allows you
to achieve your goals. 
I believe that our team fit your needs.`
  },
  {
    id: 2,
    fullName: "Incognito Name2",
    jobTitle: "CEO",
    quote: `
Technology in right people's hands
create products which contribute to the further human development.
We are an example of this synergy.
So, don't lose your chance to move forward!`
  }
]

const OurTeamSection = () => {
  return (
    <Grid
      container
      spacing={3}
      justify={"center"}
      alignItems={"stretch"}
    >
      {
        data.map(cardData => {
          const {
            fullName,
            jobTitle,
            quote
          } = cardData

          return (
            <Grid
              key={cardData.id}
              item
            >
              <QuoteCard
                fullName={fullName}
                jobTitle={jobTitle}
                quote={quote}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default OurTeamSection
