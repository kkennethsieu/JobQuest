import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addTags } from "../../../../services/apiTags";

export function useCreateTags() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createTags } = useMutation({
    mutationFn: ({ jobId, newTag }) => addTags(jobId, newTag),
    onSuccess: (_, variables) => {
      toast.success("New tag successfully created");
      queryClient.invalidateQueries({
        queryKey: ["tags", variables.jobId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createTags };
}
