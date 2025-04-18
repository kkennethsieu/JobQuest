import StatusBreakdownChart from "./StatusBreakdownChart";
import PieChartAppVsRej from "./PieChartAppVsRej";
import GoalProgressRing from "./GoalProgressRing";

function AnalyticsGrid({ jobs }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] mx-auto">
      {/* Status Breakdown Chart */}
      <div className="flex flex-col px-6 py-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Status Breakdown
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A visual breakdown of your job applications by status giving you a
          clear view of where each opportunity stands and how your search is
          progressing.
        </p>
        <StatusBreakdownChart jobs={jobs} />
      </div>

      {/* Pie Chart - Applied vs Rejected/Ghosted */}
      <div className="flex flex-col px-6 py-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Applied vs Rejected/Ghosted
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A visual breakdown of jobs applied versus those rejected or ghosted,
          helping you track your job search progress.
        </p>
        <PieChartAppVsRej jobs={jobs} />
      </div>

      {/* Goal Progress Chart */}
      <div className="flex flex-col px-6 py-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Goal Progress
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Track your progress toward your job application goal with a clear
          visual indicator of how far you’ve come.
        </p>
        <GoalProgressRing jobs={jobs} />
      </div>
    </div>
  );
}

export default AnalyticsGrid;
