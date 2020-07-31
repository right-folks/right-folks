import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import SwipeableViews from "react-swipeable-views"
import { Grid } from "@material-ui/core"
import QuoteCard from "../QuoteCard"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  }
}))

function SwipeableLeaders({
                            leaders
                          }) {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = leaders.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {leaders.map((cardData, index) => {
          const {
            fullName,
            jobTitle,
            quote,
            avatarUrl
          } = cardData
          return Math.abs(activeStep - index) <= 2 ? (
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
          ) : null
        })}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <span></span>
        }
        backButton={
          <span></span>
        }
      />
    </div>
  )
}

export default SwipeableLeaders
