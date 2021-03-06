import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #663399;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 8px;
  margin-bottom: 24px;
`

const StyledH1 = styled.h1`
  margin: 0;
  font-weight: 500;
  display: inline;
`

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
    <StyledHeader>
      <Helmet title={title}>
        <html lang={`en`} />
        <meta
          name="description"
          content={`Dashboard for GitHub Metrics for ${repoNameWithOwner}`}
        />
      </Helmet>
      <StyledH1>{title}</StyledH1>
      <p>Last Updated: {lastUpdatedTime}</p>
    </StyledHeader>
  )
}

export default HeaderComponent
