import StatItem from "./StatItem";
import { HiOutlineBriefcase, HiOutlineExclamation } from "react-icons/hi";
import { HiOutlineCalendarDays, HiOutlineCake } from "react-icons/hi2";

function StatsOverview({ jobs }) {
  const totalApps = jobs.length || "0";
  const totalInterviews =
    jobs.filter((job) => job.status === "Interviewing").length || "0";
  const totalOffers =
    jobs.filter((job) => job.status === "Offer").length || "0";
  const totalRejectedOrGhosted =
    jobs.filter((job) => ["Ghosted", "Rejected"].includes(job.status)).length ||
    "0";

  return (
    <div className="xl:grid-cols-4 md:grid md:grid-cols-2 justify-center gap-4 flex flex-wrap ">
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
        color="text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-800"
      />
      <StatItem
        title="Rejected / Ghosted"
        icon={<HiOutlineExclamation />}
        value={totalRejectedOrGhosted}
        color="text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-800"
      />
    </div>
  );
}

export default StatsOverview;
