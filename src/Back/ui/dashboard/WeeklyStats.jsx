import { HiOutlineBriefcase, HiOutlineCake } from "react-icons/hi";
import StatItem from "../analytics/StatItem";
import Spinner from "../Spinner";
import { useWeeklyJobs } from "./useWeeklyJobs";
import { HiOutlineCalendarDays } from "react-icons/hi2";

function WeeklyStats() {
  const { isLoading, jobs } = useWeeklyJobs();
  if (isLoading) return <Spinner />;

  const totalApps = jobs.length || 0;
  const totalInterviews =
    jobs.filter((job) => job.status === "Interviewing").length || 0;
  const totalOffers =
    jobs.filter((job) => job.status === "Offered").length || 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 flex flex-col gap-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 dark:border-gray-700">
      <div>
        <h2 className="text-xl font-semibold dark:text-gray-100 text-gray-800 mb-1">
          Weekly Snapshot
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          A weekly snapshot of your job applications to help you maintain
          consistency and track your progress over time.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <StatItem
          title="Applications Sent"
          icon={<HiOutlineBriefcase />}
          value={totalApps}
          color="text-sky-700 bg-sky-100 dark:text-sky-400 dark:bg-sky-800"
        />
        <StatItem
          title="Interviews Scheduled"
          icon={<HiOutlineCalendarDays />}
          value={totalInterviews}
          color="text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-800"
        />
        <StatItem
          title="Offers Received"
          icon={<HiOutlineCake />}
          value={totalOffers}
          color="text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-800"
        />
      </div>
    </div>
  );
}

export default WeeklyStats;
