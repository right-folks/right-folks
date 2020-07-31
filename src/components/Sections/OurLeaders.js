import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import Leaders from "../Leaders"
import SwipeableLeaders from "../SwipeableLeaders"

const data = [
  {
    id: 1,
    fullName: "Incognito Name1",
    jobTitle: "Founder, CTO",
    avatarUrl: `stalonne.jpeg`,
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
    avatarUrl: `brad.jpg`,
    quote: `
Technology in right people's hands
create products which contribute to the further human development.
We are an example of this synergy.
So, don't lose your chance to move forward!`
  }
]

const OurLeadersSection = () => {
  return (
    <Grid
      container
      spacing={3}
      justify={"center"}
      alignItems={"stretch"}
    >
      <Hidden smDown>
        <Leaders leaders={data}/>
      </Hidden>
      <Hidden mdUp>
        <SwipeableLeaders leaders={data}/>
      </Hidden>
    </Grid>
  )
}

export default OurLeadersSection
