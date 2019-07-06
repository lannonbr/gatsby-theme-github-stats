# Gatsby-theme-github-stats

A Gatsby Theme to display statistics for GitHub repos.

## Features

- Charts with [Recharts](http://recharts.org/) library

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
      options: {},
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

| Name     | Description                         | default | Required |
| -------- | ----------------------------------- | ------- | -------- |
| dataPath | the filepath to your data directory | N/A     | true     |

## Site Metadata

Some of the text around the site is customized by siteMetadata tokens.

| Name              | Description                                             | example                                         |
| ----------------- | ------------------------------------------------------- | ----------------------------------------------- |
| title             | Title at the top left of the page and the `<title>` tag | Gatsby Stats                                    |
| source            | url to source of the Gatsby site                        | https://github.com/lannonbr/gatsby-github-stats |
| repoNameWithOwner | username & repo name on GitHub                          | gatsbyjs/gatsby                                 |
