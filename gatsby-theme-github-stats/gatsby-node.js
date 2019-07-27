const path = require("path")

exports.createPages = ({ actions }, opts) => {
  const { createPage } = actions

  createPage({
    path: opts.basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.js`),
  })
}
