import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EC407A"
    },
    secondary: {
      main: "#2E2E2E"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#FFFAFA"
    }
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "sans-serif"
    ].join(","),
    h1: {
      fontSize: "2.0rem",
      fontFamily: [
        "Montserrat",
        "sans-serif"
      ].join(",")
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: "\"Montserrat\", sans-serif"
    }
  },
  overrides: {
    MuiTab: {
      root: {
        minHeight: 0
      }
    },
    MuiTableRow: {
      root: {
        "&:last-child td": {
          borderBottom: 0
        }
      }
    }
  }
})

export default theme
