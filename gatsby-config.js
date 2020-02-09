module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Stellar by HTML5 UP",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Stellar by HTML5 UP"
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
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
