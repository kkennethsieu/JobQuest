import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteNote } from "../../../../services/apiNotes";

export function useDeleteNotes() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteNotes } = useMutation({
    mutationFn: ({ jobId, noteIdToDelete }) =>
      deleteNote(jobId, noteIdToDelete),
    onSuccess: (deletedNotes, variables) => {
      toast.success("Note successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["notes", variables.jobId],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteNotes };
}
