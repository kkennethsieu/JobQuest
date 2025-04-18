import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../../../services/apiNotes";

export default function useNotes(jobId) {
  const {
    isLoading,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["notes", jobId],
    queryFn: () => getNotes(jobId),
  });

  return { isLoading, notes, error };
}
