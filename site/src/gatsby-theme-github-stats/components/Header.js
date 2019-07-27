/** @jsx jsx */
import { jsx, Styled, Header } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const HeaderComponent = () => {
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
      <p>
        <a
          sx={{
            color: "headerText",
            textDecoration: "none",

            "&:hover": {
              textDecoration: "underline",
            },
          }}
          href="https://github.com/lannonbr/gatsby-theme-github-stats/tree/master/gatsby-theme-github-stats"
        >
          Documentation
        </a>
      </p>
    </Header>
  )
}

export default HeaderComponent
