import React from "react"

const Overview = ({ currentNode }) => (
  <section id="overview">
    <h2>Overview</h2>
    <ul>
      <li>
        {currentNode.openIssues.toLocaleString()}
        <p>Open Issues</p>
      </li>
      <li>
        {currentNode.closedIssues.toLocaleString()}
        <p>Closed Issues</p>
      </li>
      <li>
        {currentNode.openPRs.toLocaleString()}
        <p>Open PRs</p>
      </li>
      <li>
        {currentNode.mergedPRs.toLocaleString()}
        <p>Merged PRs</p>
      </li>
      <li>
        {currentNode.closedPRs.toLocaleString()}
        <p>Closed PRs</p>
      </li>
      <li>
        {currentNode.stars.toLocaleString()}
        <p>Stars</p>
      </li>
    </ul>
  </section>
)

export default Overview
