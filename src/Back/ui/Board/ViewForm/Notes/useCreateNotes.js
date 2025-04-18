import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNotes } from "../../../../services/apiNotes";

export function useCreateNotes() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createNotes } = useMutation({
    mutationFn: ({ jobId, newNote }) => addNotes(jobId, newNote),
    onSuccess: (_, variables) => {
      toast.success("New note successfully created");
      queryClient.invalidateQueries({
        queryKey: ["notes", variables.jobId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createNotes };
}
