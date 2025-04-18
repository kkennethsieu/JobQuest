import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateNoteContent } from "../../../../services/apiNotes";

export function useEditNotes() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateNote } = useMutation({
    mutationFn: ({ jobId, noteId, newContent }) =>
      updateNoteContent(jobId, noteId, newContent),
    onSuccess: (_, variables) => {
      toast.success("New note successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["notes", variables.jobId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateNote };
}
