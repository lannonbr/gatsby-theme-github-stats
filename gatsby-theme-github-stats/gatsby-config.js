const path = require("path")

module.exports = options => ({
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: options.dataPath,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
  ],
})
