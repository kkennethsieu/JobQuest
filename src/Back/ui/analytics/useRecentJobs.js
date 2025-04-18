import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getJobs, getJobsAfterDate } from "../../services/apiJobs";
import { useUser } from "../authentication/useUser";

export function useRecentJobs() {
  const [searchParams] = useSearchParams();
  const { user } = useUser();

  const last = searchParams.get("last");

  const isAll = last === "all";

  const numDays = isAll ? null : !last ? 7 : Number(last);

  const queryDate = numDays ? subDays(new Date(), numDays).toISOString() : null;

  const { isLoading, data: jobs } = useQuery({
    queryFn: () =>
      isAll ? getJobs(user.id) : getJobsAfterDate(queryDate, user.id),
    queryKey: ["jobs", isAll ? "all" : `last-${numDays}`],
  });

  return { isLoading, jobs };
}
