import AnalyticsGrid from "../ui/analytics/AnalyticsGrid";
import AnalyticsHeader from "../ui/analytics/AnalyticsHeader";
import StatsOverview from "../ui/analytics/StatsOverview";
import { useRecentJobs } from "../ui/analytics/useRecentJobs";
import Spinner from "../ui/Spinner";

function Analytics() {
  const { isLoading, jobs } = useRecentJobs();

  if (isLoading) return <Spinner />;

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5 space-y-5">
      <AnalyticsHeader />
      <StatsOverview jobs={jobs} />
      <AnalyticsGrid jobs={jobs} />
    </div>
  );
}

export default Analytics;
