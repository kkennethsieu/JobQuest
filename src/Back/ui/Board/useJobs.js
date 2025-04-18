import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";

export default function useJobs(userId) {
  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ["jobs", userId],
    queryFn: () => getJobs(userId),
  });

  return { isLoading, jobs, error };
}
