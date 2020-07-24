module.exports = {
  siteMetadata: {
    siteUrl: `https://right-folks.github.io`,
    title: `RightFolks`,
    description: `Technology is nothing. Without right people.`,
    author: `@RightFolks`,
    nav: [
      {
        hash: "demo",
        title: "Demos"
      },
      {
        hash: "team",
        title: "Our Team"
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
        display: `standalone`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,600,700`, // you can also specify font weights and styles
          `Open Sans\:300,400,600,700` // you can also specify font weights and styles
        ],
        display: "swap"
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
