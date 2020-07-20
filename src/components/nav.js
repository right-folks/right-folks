import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { makeStyles, withStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  item: {
    opacity: 0.56
  }
})

const StyledTabs = withStyles({
  root: {
    minHeight: 0,
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 48,
      width: "100%",
      backgroundColor: "#8A8888"
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span/> }}/>)

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    minWidth: 0,
    padding: '2px 24px',
    "&:focus": {
      opacity: 1
    },
    "&$selected": {
      color: "#a203ee",
      fontWeight: theme.typography.fontWeightMedium
    },
  }
}))((props) => <Tab disableRipple {...props} />)

// Home            Demos            Our Team            FAQs            Contact US
const links = [
  {
    label: 'Home',
  },
  {
    label: 'Demos',
  },
  {
    label: 'Our Team',
  },
  {
    label: 'FAQs',
  },
  {
    label: 'Contact Us',
  }
];

export default function Nav() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      centered
    >
      {
        links.map(link => (
          <StyledTab
            className={classes.item}
            disableRipple={true}
            disableFocusRipple={true}
            label={link.label}
          />))
      }
    </StyledTabs>
  )
}
