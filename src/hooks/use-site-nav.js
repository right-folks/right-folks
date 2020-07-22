import { graphql, useStaticQuery } from "gatsby"

export const useSiteNav = () => {
  const { site } = useStaticQuery(
    graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    nav {
                        hash
                        title
                    }
                }
            }
        }
    `
  )

  return site.siteMetadata.nav
}
