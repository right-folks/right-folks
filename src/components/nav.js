import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { useSiteNav } from "../hooks/use-site-nav"
import { Hidden } from "@material-ui/core"

const useStyles = makeStyles({
  item: {
    opacity: 0.56
  }
})

const StyledTabs = withStyles({
  root: {
    minHeight: 0
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
    padding: `2px ${theme.spacing(3)}`,
    "&:focus": {
      opacity: 1
    },
    "&$selected": {
      color: "#a203ee",
      fontWeight: theme.typography.fontWeightMedium
    }
  }
}))((props) => <Tab disableRipple {...props} />)

export default function Nav() {
  const nav = useSiteNav()

  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Hidden smDown>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        {
          nav.map(navItem => (
            <StyledTab
              key={navItem.hash}
              className={classes.item}
              disableRipple={true}
              disableFocusRipple={true}
              label={navItem.title}
            />))
        }
      </StyledTabs>
    </Hidden>
  )
}
