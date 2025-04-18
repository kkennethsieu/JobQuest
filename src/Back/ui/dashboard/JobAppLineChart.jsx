import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Spinner from "../Spinner";
import useJobs from "../Board/useJobs";
import { useUser } from "../authentication/useUser";
import { format, parse } from "date-fns";

function JobAppLineChart() {
  const { user } = useUser();
  const { isLoading, jobs } = useJobs(user.id);

  if (isLoading) return <Spinner />;

  const applicationsData = jobs.reduce((acc, job) => {
    const appliedDate = job.appliedOn
      ? format(new Date(job.appliedOn), "MM/dd/yyyy")
      : null;
    if (appliedDate) {
      acc[appliedDate] = (acc[appliedDate] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.entries(applicationsData).map(([date, count]) => ({
    date,
    applications: count,
  }));

  chartData.sort(
    (a, b) =>
      parse(a.date, "MM/dd/yyyy", new Date()) -
      parse(b.date, "MM/dd/yyyy", new Date())
  );

  return (
    <div className=" flex flex-col gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 w-full">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1 text-center">
          Job Applications Over Time
        </h2>
        <p className="text-sm text-gray-500 text-center dark:text-gray-400">
          Track how many jobs you've applied for each day.
        </p>
      </div>

      <div className="w-full h-[200px] sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 15, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => format(new Date(tick), "MM/dd")}
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fill: "#6b7280" }}
            />
            <YAxis
              domain={[0, "auto"]}
              allowDecimals={false}
              tick={{ fill: "#6b7280" }}
            />
            <Tooltip
              labelFormatter={(value) => format(new Date(value), "MM/dd/yyyy")}
              contentStyle={{
                backgroundColor: "#fff",
                borderColor: "#ccc",
                color: "#111",
              }}
            />
            <Legend verticalAlign="bottom" />
            <Line
              type="monotone"
              dataKey="applications"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default JobAppLineChart;
