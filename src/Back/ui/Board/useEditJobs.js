import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditJob } from "../../services/apiJobs";
import toast from "react-hot-toast";

export function useEditJobs() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editJob } = useMutation({
    mutationFn: ({ newJobData, id }) => createEditJob(newJobData, id),
    onSuccess: () => {
      toast.success("Job successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editJob };
}
