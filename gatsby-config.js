module.exports = {
  siteMetadata: {
    siteUrl: `https://right-folks.github.io`,
    title: `RightFolks`,
    description: `Technology is nothing. Without right people.`,
    author: `@RightFolks`,
    googleSiteVerificationCode: `itot5aPpj7ncc2pQkTDqHQgECDKbaATYg8d7kXScdF8`,
    nav: [
      {
        hash: "demo",
        title: "Demos"
      }, {
        hash: "tech",
        title: "Technologies"
      },
      {
        hash: "leaders",
        title: "Our Leaders"
      },
      {
        hash: "testimonials",
        title: "Testimonials"
      },
      {
        hash: "faq",
        title: "FAQs"
      },
      {
        hash: "contact-us",
        title: "Contact Us"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`, `700`]
              },
              {
                family: `Open Sans`,
                variants: [`300`, `400`, `500`, `700`]
              }
            ]
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RightFolks`,
        short_name: `RightFolks`,
        start_url: `/`,
        background_color: `#EC407A`,
        theme_color: `#EC407A`,
        display: `fullscreen`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
