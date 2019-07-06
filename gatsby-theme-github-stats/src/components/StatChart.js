import React from "react"
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
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 15 }}>
          <Tooltip labelFormatter={time => moment.unix(time).format("llll")} />
          <Legend />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            dot={{
              stroke: color,
              strokeWidth: 1,
              fill: color,
            }}
          />
          <XAxis
            dataKey="timestamp"
            tickFormatter={time => moment.unix(time).format("YYYY-MM-DD")}
            minTickGap={20}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            interval={0}
            domain={[
              dataMin => Math.floor(dataMin / interval) * interval,
              dataMax => Math.ceil(dataMax / interval) * interval,
            ]}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

export default StatChart
