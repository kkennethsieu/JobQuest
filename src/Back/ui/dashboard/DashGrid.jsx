import JobAppLineChart from "./JobAppLineChart";
import ProgressChart from "./ProgressChart";
import RecentActivityCard from "./RecentActivityCard";
import WeeklyStats from "./WeeklyStats";

function DashGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.65fr_1fr] gap-6 py-6">
      <WeeklyStats />
      <ProgressChart />
      <JobAppLineChart />
      <RecentActivityCard />
    </div>
  );
}

export default DashGrid;
