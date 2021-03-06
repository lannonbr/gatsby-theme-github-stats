import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          source
          repoNameWithOwner
        }
      }
    }
  `)

  const { source, repoNameWithOwner } = data.site.siteMetadata

  return (
    <section>
      <p>
        These are statistics for the{" "}
        <a href={`https://github.com/${repoNameWithOwner}`}>
          {repoNameWithOwner}
        </a>{" "}
        GitHub repo over the last two weeks.
      </p>
      <p>
        Source: <a href={source}>{source}</a>
      </p>
    </section>
  )
}

export default Footer
