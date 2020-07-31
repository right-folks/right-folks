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
    avatarUrl: `mishchuk.jpeg`,
    profileUrl: `https://www.linkedin.com/in/edward-mishchuk-29587613a/`,
    fullName: `Edward Mishchuk`,
    position: `Founder & CEO`,
    companyName: `Primary Exotics`,
    companyUrl: `https://www.primaryexotics.com/`,
    message: `Oleg does great work, he's very helpful, and a great problem solver!`

  }
]
const TestimonialsSection = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        className={classes.sectionTitleBox}>
        {
          testimonials.map(testimonial => (
              <Grid
                item
                key={testimonial.id}
                xs={12}
                sm={10}
                md={8}
              >
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
