module.exports = options => ({
  plugins: [
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
