import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"
import moment from "moment"

import StatChart from "../components/StatChart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Overview from "../components/Overview"

import "./index.css"

const RED = "rgb(203, 36, 49)"
const GREEN = "rgb(40, 167, 69)"
const PURPLE = "rgb(102, 51, 153)"
const GOLD = "rgb(255, 182, 30)"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          closedIssues
          closedPRs
          mergedPRs
          openIssues
          openPRs
          stars
          timestamp
        }
      }
    }
  `)

  let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp)

  let currentNode = nodes[nodes.length - 1]

  return (
    <Styled.root>
      <Header
        lastUpdatedTime={moment
          .unix(nodes[nodes.length - 1].timestamp)
          .format("llll UTCZ")}
      />
      <main>
        <div className="container">
          <Overview currentNode={currentNode} />
          <StatChart
            title="Open Issues"
            data={nodes}
            yKey="openIssues"
            color={GREEN}
          />
          <StatChart
            title="Closed Issues"
            data={nodes}
            yKey="closedIssues"
            color={RED}
          />
          <StatChart
            title="Open PRs"
            data={nodes}
            yKey="openPRs"
            color={GREEN}
          />
          <StatChart
            title="Merged PRs"
            data={nodes}
            yKey="mergedPRs"
            color={PURPLE}
          />
          <StatChart
            title="Closed PRs"
            data={nodes}
            yKey="closedPRs"
            color={RED}
          />
          <StatChart title="Stars" data={nodes} yKey="stars" color={GOLD} />
          <Footer />
        </div>
      </main>
    </Styled.root>
  )
}
