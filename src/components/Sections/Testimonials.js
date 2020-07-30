import React from "react"
import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TestimonialCard from "../TestimonialCard"

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

const testimonials = [
  {
    id: 1,
    avatarUrl: `avatar.jpg`,
    fullName: `John Doe`,
    position: `Another one developer from Ukraine`,
    message: `
It is very important for us to keep abreast
of the latest developments and to navigate freely in the information space,
the resources of Medialogy allow us to do this. 
Every day we can conduct operational monitoring of the media and analyze data online, 
this saves the time of analysts and journalists. `

  }
]
const TestimonialsSection = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.sectionTitleBox}>
        {
          testimonials.map(testimonial => (
              <Grid item key={testimonial.id}>
                <TestimonialCard {...testimonial}/>
              </Grid>
            )
          )
        }
        <Paper>
        </Paper>
      </Grid>
    </>
  )
}

export default TestimonialsSection
