import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditJob } from "../../services/apiJobs";

export function useCreateJobs() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createJobs } = useMutation({
    mutationFn: createEditJob,
    onSuccess: () => {
      toast.success("New job successfully created");
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createJobs };
}
