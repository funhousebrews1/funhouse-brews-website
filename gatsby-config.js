module.exports = {
  siteMetadata: {
    title: "Funhouse Brews",
    author: "Alan Ray Ampersand",
    description: "Website for Funhouse Brews, a microbrewery in Portland, Oregon.",
    url: "https://www.funhousebrews.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `beer`,
        path: `${__dirname}/src/beer`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `funhousebrews`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-remark`
  ],
}
