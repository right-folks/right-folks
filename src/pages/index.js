import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import SectionTitle from "../components/SectionTitle"
import { useSiteNav } from "../hooks/use-site-nav"
import {
  MainSection,
  TechnologiesSection,
  OurTeamSection,
  FaqsSection,
  DemoSection,
  ContactUsSection,
  TestimonialsSection
} from "../components/Sections"

const useStyles = makeStyles((theme) => ({
  item: {
    opacity: 0.56
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(36),
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    display: "inline"
  },
  divider: {
    height: "2px",
    width: "64px",
    margin: "auto",
    backgroundColor: theme.palette.secondary.main
  }
}))

const IndexPage = () => {
  const nav = useSiteNav()

  const classes = useStyles()

  const sections = [
    DemoSection,
    TechnologiesSection,
    OurTeamSection,
    TestimonialsSection,
    FaqsSection,
    ContactUsSection
  ]

  let iterator = -1

  return <>
    <CssBaseline/>
    <Layout>
      <SEO title="Right Folks"/>
      <MainSection/>
      {
        nav.map(navItem => {
            iterator++

            return <>
              <SectionTitle
                key={navItem.hash}
                text={navItem.title}
              />
              {
                React.createElement(sections[iterator])
              }
            </>
          }
        )
      }
    </Layout>
  </>
}

export default IndexPage
