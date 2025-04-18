import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getJobsAfterDate } from "../../services/apiJobs";
import { useUser } from "../authentication/useUser";

export function useWeeklyJobs() {
  const { user } = useUser();

  const queryDate = subDays(new Date(), 7).toISOString();

  const { isLoading, data: jobs } = useQuery({
    queryFn: () => getJobsAfterDate(queryDate, user.id),
    queryKey: ["jobs", "weekly"],
  });

  return { isLoading, jobs };
}
