# Gatsby-theme-github-stats

A Gatsby Theme to display statistics for GitHub repos.

## Example Site

you can see a live running example site at [https://gatsby-theme-github-stats-example.netlify.com/](https://gatsby-theme-github-stats-example.netlify.com/).

This is the gatsby site in this repo at `site` deployed up to Netlify.

## Features

- Charts with [Recharts](http://recharts.org/) library
- Customizable styles with [Theme-UI](https://theme-ui.com/)

## Setup

Add the package to your gatsby site

```shell
yarn add gatsby-theme-github-stats
```

and then put it in your gatsby-config file

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
  ],
}
```

Next, create a file at `src/data/data.json` in your gatsby site and have it as the following format:

```json
[
  {
    "stars": 35670,
    "openPRs": 84,
    "timestamp": 1560977138,
    "closedIssues": 6355,
    "closedPRs": 1094,
    "openIssues": 442,
    "mergedPRs": 6947
  }
]
```

Each item is a single datapoint. There is no max amount of datapoints you can have.

Then finally run `yarn develop` and you should see the fully fleshed out site with graphs and all.

## Config Options

These are all of the currently available fields in the `options` field in the gatsby-config plugin entry for this theme:

| Name     | Description                         | Default | Required |
| -------- | ----------------------------------- | ------- | -------- |
| dataPath | the filepath to your data directory | N/A     | true     |

## Site Metadata

Some of the text around the site is customized by siteMetadata tokens.

| Name              | Description                                             | Example                                         |
| ----------------- | ------------------------------------------------------- | ----------------------------------------------- |
| title             | Title at the top left of the page and the `<title>` tag | Gatsby Stats                                    |
| source            | url to source of the Gatsby site                        | https://github.com/lannonbr/gatsby-github-stats |
| repoNameWithOwner | username & repo name on GitHub                          | gatsbyjs/gatsby                                 |

## Theme UI

You can extend / override some of the styling on this page using Theme UI. you can the default theme inside the theme's directory at `src/gatsby-plugin-theme-ui/index.js`

If you want to override it, create a file in your site's directory at `src/gatsby-plugin-theme-ui/index.js`.

Here's an example of how to override it:

```js
// site/src/gatsby-plugin-theme-ui/index.js

// import the gatsby-theme's theme.
import Theme from "gatsby-theme-github-stats/src/gatsby-plugin-theme-ui"

export default {
  // copy over content from the default theme
  ...Theme,
  colors: {
    // copy over default colors
    ...Theme.colors,

    // override headerBackground to be red
    headerBackground: "red",
  },
}
```

Here are various properties you can shadow:

| Field                   | Description                                  | Default                                                                                                                       |
| ----------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| colors.headerBackground | Header background                            | "#663399"                                                                                                                     |
| colors.headerText       | Header text color                            | "white"                                                                                                                       |
| fonts.systemSans        | Sans-serif font that is used across the site | "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" |
