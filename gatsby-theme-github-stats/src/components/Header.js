import React from "react"
import { Styled, Header } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const HeaderComponent = ({ lastUpdatedTime }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repoNameWithOwner
        }
      }
    }
  `)

  const { title, repoNameWithOwner } = data.site.siteMetadata

  return (
    <Header>
      <Helmet title={title}>
        <html lang={`en`} />
        <meta
          name="description"
          content={`Dashboard for GitHub Metrics for ${repoNameWithOwner}`}
        />
      </Helmet>
      <Styled.h1>{title}</Styled.h1>
      <p>Last Updated: {lastUpdatedTime}</p>
    </Header>
  )
}

export default HeaderComponent
