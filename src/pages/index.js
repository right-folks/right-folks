import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SectionTitle from "../components/SectionTitle"
import MainSection from "../components/Sections/Main"

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
  const classes = useStyles()

  return <>
    <CssBaseline/>
    <Layout>
      <SEO title="Right Folks"/>
      <MainSection/>
      <SectionTitle text={"Demos"}/>
      <SectionTitle text={"Our Team"}/>
      <SectionTitle text={"FAQs"}/>
      <SectionTitle text={"Contact Us"}/>
    </Layout>
  </>
}

export default IndexPage
