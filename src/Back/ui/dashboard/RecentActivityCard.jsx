import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import useJobs from "../Board/useJobs";
import Spinner from "../Spinner";

const statusColors = {
  Applied:
    "bg-blue-100 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-800 dark:text-blue-100 dark:ring-blue-700",
  Interviewing:
    "bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200 dark:bg-yellow-800 dark:text-yellow-100 dark:ring-yellow-700",
  Offer:
    "bg-green-100 text-green-700 ring-1 ring-green-200 dark:bg-green-800 dark:text-green-100 dark:ring-green-700",
  Rejected:
    "bg-red-100 text-red-700 ring-1 ring-red-200 dark:bg-red-800 dark:text-red-100 dark:ring-red-700",
  Ghosted:
    "bg-gray-100 text-gray-700 ring-1 ring-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600",
};

function RecentActivityCard() {
  const { user, isLoading: loadingUser } = useUser();
  const { isLoading: loadingJobs, jobs } = useJobs(user.id);
  const navigate = useNavigate();

  if (loadingUser || loadingJobs) return <Spinner />;

  const recentJobs = jobs
    ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 w-full">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Most Recent Activity
        </h2>
      </div>

      <div className="space-y-3">
        {recentJobs.map((job) => {
          const statusClass =
            statusColors[job.status] ||
            "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";

          return (
            <div
              key={job.id}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50 dark:bg-gray-700 transition-all duration-200"
            >
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {job.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {job.position}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 text-sm">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}`}
                >
                  {job.status}
                </span>
                <p className="italic text-gray-500 dark:text-gray-400">
                  {job.employmentType}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivityCard;
