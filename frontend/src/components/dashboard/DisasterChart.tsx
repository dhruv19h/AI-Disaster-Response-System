import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:00", incidents: 12 },
  { time: "08:00", incidents: 18 },
  { time: "10:00", incidents: 14 },
  { time: "12:00", incidents: 27 },
  { time: "14:00", incidents: 31 },
  { time: "16:00", incidents: 24 },
  { time: "18:00", incidents: 38 },
];

function DisasterChart() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-white">
          Disaster Activity
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Number of emergency incidents reported today
        </p>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
            />

            <XAxis
              dataKey="time"
              stroke="#64748b"
              fontSize={12}
            />

            <YAxis
              stroke="#64748b"
              fontSize={12}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />

            <Line
              type="monotone"
              dataKey="incidents"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DisasterChart;