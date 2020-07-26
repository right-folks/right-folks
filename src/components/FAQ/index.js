import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main
  },
  details: {
    color: theme.palette.secondary.main,
    textAlign: 'justify'
  }
}))

export default function Faq({ faqs }) {
  const classes = useStyles()

  return (
    <Grid
      style={
        {
          width: "100%",
          margin: "auto"
        }
      }
      container
      xs={10}
      direction={"column"}
      justify={"center"}
    >
      {
        faqs.map(qa => (
          <Accordion key={`question-${qa.id}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color={"primary"}/>}
              id={`question-${qa.id}`}
            >
              <Typography className={classes.heading}>
                {qa.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography>
                {
                  qa.answer
                }
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Grid>

  )
}
