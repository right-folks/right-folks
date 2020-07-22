import React from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

function ElevationScroll(props) {
  const { children, elevation } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? elevation : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  elevation: PropTypes.number.isRequired
}

export default ElevationScroll;
