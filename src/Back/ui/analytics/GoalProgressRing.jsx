import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Spinner from "../Spinner";
import useJobs from "../Board/useJobs";
import { useUser } from "../authentication/useUser";
import { useGetUserProfile } from "../dashboard/useGetUserProfile";

function GoalProgressRing() {
  const { user } = useUser();
  const { isLoading: loadingJobs, jobs } = useJobs(user.id);
  const { isLoading: loadingGoal, data: userData } = useGetUserProfile(user.id);

  if (loadingJobs || loadingGoal) return <Spinner />;

  const goalAmount = userData?.[0]?.jobGoal || 0;
  const currentAmount = jobs.length || 0;

  const percentage = goalAmount
    ? Math.min((currentAmount / goalAmount) * 100, 100)
    : 0;

  const data = [
    { name: "Progress", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = ["#3b82f6", "#e5e7eb"]; // Tailwind blue-500 and gray-200

  return (
    <div className="bg-white dark:bg-gray-800 py-6 px-2 rounded-xl shadow-lg flex space-y-4 items-center justify-center flex-col">
      <h3 className="md:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 text-base">
        Track Your Progress
      </h3>
      <ResponsiveContainer
        width="100%"
        height={180}
        className="text-xs relative"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                cornerRadius={50}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          {goalAmount === 0 ? "—" : `${Math.round(percentage)}%`}
        </div>
      </ResponsiveContainer>
      <p className="text-sm text-gray-800 dark:text-gray-100">
        {currentAmount} of {goalAmount} jobs
      </p>
      <div className="text-xs text-gray-800 dark:text-gray-100">
        {percentage === 100
          ? "Goal reached! Keep it up!"
          : "Keep applying and track your progress!"}
      </div>
    </div>
  );
}

export default GoalProgressRing;
