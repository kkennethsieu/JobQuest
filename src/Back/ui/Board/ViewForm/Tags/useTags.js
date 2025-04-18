import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../../../services/apiTags";

export default function useTags(jobId) {
  const {
    isLoading,
    data: tags,
    error,
  } = useQuery({
    queryKey: ["tags", jobId],
    queryFn: () => getTags(jobId),
  });

  return { isLoading, tags, error };
}
