import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateStatus as updateStatusApi } from "../../services/apiStatus";

export function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateStatus } = useMutation({
    mutationFn: ({ jobId, newStatus }) => updateStatusApi(jobId, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateStatus };
}
