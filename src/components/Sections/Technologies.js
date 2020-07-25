import React from "react"
import { Grid, Typography } from "@material-ui/core"
import ReactJSLogo from "../../assets/icons/tech/reactjs.svg"
import VueLogo from "../../assets/icons/tech/vue.svg"
import AngularLogo from "../../assets/icons/tech/angular.svg"
import LaravelLogo from "../../assets/icons/tech/laravel.svg"
import SymfonyLogo from "../../assets/icons/tech/symfony.svg"
import NestJsLogo from "../../assets/icons/tech/nestjs.svg"
import ElasticSearchLogo from "../../assets/icons/tech/elasticsearch.svg"
import GraphqlLogo from "../../assets/icons/tech/graphql.svg"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    technologyBlock: {
      padding: theme.spacing(3),
      textAlign: "center",
      WebkitTransition: "all 0.4s",
      MozTransition: "all 0.4s",
      OTransition: "all 0.4s",
      transition: "all 0.4s",
      WebkitFilter: "grayscale(95%)",
      MozFilter: "grayscale(95%)",
      MsFilter: "grayscale(95%)",
      OFilter: "grayscale(95%)",
      filter: "grayscale(95%)",
      "&:hover": {
        WebkitFilter: "none",
        MozFilter: "none",
        MsFilter: "none",
        OFilter: "none",
        filter: "none"
      }
    }
  })
)

const stack = [
  {
    logo: ReactJSLogo,
    name: "ReactJS"
  }, {
    logo: VueLogo,
    name: "VueJS"
  }, {
    logo: AngularLogo,
    name: "Angular"
  }, {
    logo: LaravelLogo,
    name: "Laravel"
  }, {
    logo: SymfonyLogo,
    name: "Symfony"
  }, {
    logo: NestJsLogo,
    name: "NestJS"
  }, {
    logo: ElasticSearchLogo,
    name: "ElasticSearch"
  }, {
    logo: GraphqlLogo,
    name: "Graphql"
  }
]

const TechnologiesSection = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
    >
      {
        Object.values(stack).map(technology => (
          <Grid
            key={technology.name}
            item
            className={classes.technologyBlock}
          >
            {
              React.createElement(technology.logo, {
                  style: {
                    width: "64px",
                    height: "64px"
                  }
                }
              )
            }
            <Typography
              // display={"inline"}
              variant={"h5"}
            >
              {technology.name}
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default TechnologiesSection
