import { useQuery } from "@tanstack/react-query";
import { getStatus } from "../../services/apiStatus";

export default function useStatus() {
  const {
    isLoading: loadingStatus,
    data: statusColumn,
    error,
  } = useQuery({
    queryKey: ["status"],
    queryFn: getStatus,
  });

  return { loadingStatus, statusColumn, error };
}
