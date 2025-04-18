import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateGoal as updateGoalApi } from "../../services/apiUsers";

export function useUpdateGoal() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateGoal } = useMutation({
    mutationFn: ({ userId, amount }) => updateGoalApi({ userId, amount }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, updateGoal };
}
