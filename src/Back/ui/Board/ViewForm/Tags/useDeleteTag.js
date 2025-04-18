import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTag } from "../../../../services/apiTags";

export function useDeleteTag() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTags } = useMutation({
    mutationFn: ({ jobId, tagIdToDelete }) => deleteTag(jobId, tagIdToDelete),
    onSuccess: (deleteTag, variables) => {
      toast.success("Note successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["tags", variables.jobId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteTags };
}
