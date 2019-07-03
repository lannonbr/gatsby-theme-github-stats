const path = require("path");

module.exports = options => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: options.dataPath
      }
    },
    `gatsby-transformer-json`
  ]
});
