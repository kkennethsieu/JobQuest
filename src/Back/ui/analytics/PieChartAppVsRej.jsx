import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const STATUS_COLORS = {
  Applied: "#60A5FA",
  Rejected: "#F87171",
};

function PieChartAppVsRej({ jobs }) {
  const appliedCount = jobs.filter((job) => job.status === "Applied").length;
  const rejectedOrGhostedCount = jobs.filter(
    (job) => job.status === "Rejected" || job.status === "Ghosted"
  ).length;

  const total = appliedCount + rejectedOrGhostedCount;

  const data = [
    { name: "Applied", value: appliedCount, color: STATUS_COLORS.Applied },
    {
      name: "Rejected/Ghosted",
      value: rejectedOrGhostedCount,
      color: STATUS_COLORS.Rejected,
    },
  ];

  // Function to calculate percentage
  const renderLabel = ({ value }) => {
    const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
    return `${percentage}%`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 py-6 px-2 rounded-xl shadow-lg flex items-center justify-center flex-col">
      <h3 className="md:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 text-base">
        Applied vs Rejected/Ghosted
      </h3>
      <ResponsiveContainer width="100%" height={260} className="text-sm">
        {/* Adjust width and height here */}
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            labelLine={false}
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
            itemStyle={{ color: "#4B5563" }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="vertical"
            iconSize={8}
            iconType="circle"
            wrapperStyle={{
              color: "#6B7280", // For light mode
            }}
            className="text-gray-700 dark:text-gray-300"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartAppVsRej;
