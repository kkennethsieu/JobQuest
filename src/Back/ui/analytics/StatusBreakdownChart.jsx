import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const STATUS_COLORS = {
  Applied: "#60A5FA",
  Interviewing: "#FACC15",
  Offer: "#72f478",
  Rejected: "#F87171",
  Ghosted: "#9CA3AF",
};

function StatusBreakdownChart({ jobs }) {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const allStatuses = [
    "Applied",
    "Interviewing",
    "Offer",
    "Rejected",
    "Ghosted",
  ];

  const chartData = allStatuses.map((status) => ({
    status,
    value: statusCounts[status] || 0,
    color: STATUS_COLORS[status] || "#9CA3AF",
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center flex-col">
      <h3 className="md:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 text-base">
        Status Breakdown
      </h3>
      <ResponsiveContainer width="100%" height={240} className="text-xs">
        <BarChart
          data={chartData}
          margin={{ top: 0, right: 0, left: -35, bottom: 50 }}
        >
          <XAxis
            dataKey="status"
            tick={{ fill: "#6B7280", fontSize: 14 }}
            interval={0}
            angle={-35}
            textAnchor="end"
            className="text-gray-700 dark:text-gray-300"
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#1d273b", fontSize: 14 }}
            className="text-gray-700 dark:text-gray-300"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
            itemStyle={{ color: "#4B5563" }}
          />
          <Bar dataKey="value" barSize={80} radius={[8, 8, 0, 0]}>
            {chartData.map((entry) => (
              <Cell key={entry.status} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatusBreakdownChart;
