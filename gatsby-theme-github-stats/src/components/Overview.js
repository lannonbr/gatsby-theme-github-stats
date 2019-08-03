import React from "react"

/**
 *
 * @param {number} current - Current Value
 * @param {number} prev - previous value
 * @param {string} direction - direction which should be positive ("up" or "down")
 */
const dayDiff = (current, prev, direction) => {
  let diff = current - prev
  if ((direction === "up" && diff > 0) || (direction === "down" && diff < 0)) {
    return (
      <p style={{ color: "green" }}>
        ({diff >= 0 ? "+" : ""}
        {diff} since yesterday)
      </p>
    )
  } else {
    return (
      <p style={{ color: "rgb(203, 36, 49)" }}>
        ({diff >= 0 ? "+" : ""}
        {diff} since yesterday)
      </p>
    )
  }
}

const Overview = ({ currentNode, prevDayNode }) => (
  <section id="overview">
    <h2>Overview</h2>
    <ul>
      <li>
        {currentNode.openIssues.toLocaleString()}
        <p>Open Issues</p>
        {prevDayNode &&
          dayDiff(currentNode.openIssues, prevDayNode.openIssues, "down")}
      </li>
      <li>
        {currentNode.closedIssues.toLocaleString()}
        <p>Closed Issues</p>
        {prevDayNode &&
          dayDiff(currentNode.closedIssues, prevDayNode.closedIssues, "up")}
      </li>
      <li>
        {currentNode.openPRs.toLocaleString()}
        <p>Open PRs</p>
        {prevDayNode &&
          dayDiff(currentNode.openPRs, prevDayNode.openPRs, "down")}
      </li>
      <li>
        {currentNode.mergedPRs.toLocaleString()}
        <p>Merged PRs</p>
        {prevDayNode &&
          dayDiff(currentNode.mergedPRs, prevDayNode.mergedPRs, "up")}
      </li>
      <li>
        {currentNode.closedPRs.toLocaleString()}
        <p>Closed PRs</p>
        {prevDayNode &&
          dayDiff(currentNode.closedPRs, prevDayNode.closedPRs, "up")}
      </li>
      <li>
        {currentNode.stars.toLocaleString()}
        <p>Stars</p>
        {prevDayNode && dayDiff(currentNode.stars, prevDayNode.stars, "up")}
      </li>
    </ul>
  </section>
)

export default Overview
