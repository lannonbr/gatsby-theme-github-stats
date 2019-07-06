import React from "react"

const Overview = ({ currentNode }) => (
  <section id="overview">
    <h2>Overview</h2>
    <ul>
      <li>
        {currentNode.openIssues}
        <p>Open Issues</p>
      </li>
      <li>
        {currentNode.closedIssues}
        <p>Closed Issues</p>
      </li>
      <li>
        {currentNode.openPRs}
        <p>Open PRs</p>
      </li>
      <li>
        {currentNode.mergedPRs}
        <p>Merged PRs</p>
      </li>
      <li>
        {currentNode.closedPRs}
        <p>Closed PRs</p>
      </li>
      <li>
        {currentNode.stars}
        <p>Stars</p>
      </li>
    </ul>
  </section>
)

export default Overview
