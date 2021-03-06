import * as React from "react"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import moment from "moment"

const interval = 50

const StatChart = ({ title, data, yKey, color }) => {
  let datapoints = data.map((dataEntry) => dataEntry[yKey])

  let max = Math.max(...datapoints)
  let min = Math.min(...datapoints)

  let first = data[0]
  let last = data[data.length - 1]

  first = { timestamp: first.timestamp, [yKey]: first[yKey] }
  last = { timestamp: last.timestamp, [yKey]: last[yKey] }

  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 15 }}>
          <Tooltip
            labelFormatter={(time) => moment.unix(time).format("llll")}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(time) => moment.unix(time).format("YYYY-MM-DD")}
            minTickGap={20}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            interval={0}
            domain={[
              (dataMin) => Math.floor(dataMin / interval) * interval,
              (dataMax) => Math.ceil(dataMax / interval) * interval,
            ]}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <h3>Start Value</h3>
          <p>{first[yKey] + " " + title}</p>
        </div>

        <div>
          <h3>End Value</h3>
          <p>{last[yKey] + " " + title}</p>
        </div>

        <div>
          <h3>Max Value</h3>
          <p>{max + " " + title}</p>
        </div>

        <div>
          <h3>Min Value</h3>
          <p>{min + " " + title}</p>
        </div>
      </div>
    </section>
  )
}

export default StatChart
