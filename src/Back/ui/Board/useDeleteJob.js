import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteJob as deleteJobApi } from "../../services/apiJobs";

export function useDeleteJob() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteJob } = useMutation({
    mutationFn: deleteJobApi,
    onSuccess: () => {
      toast.success("New job successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteJob };
}
