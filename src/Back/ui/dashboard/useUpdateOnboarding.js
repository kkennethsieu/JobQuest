import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateOnboarding as updateOnboardingApi } from "../../services/apiOnboarding";

export function useUpdateOnboarding() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateOnboarding } = useMutation({
    mutationFn: ({ userId, completed, taskName }) =>
      updateOnboardingApi({ userId, completed, taskName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboardingStatus"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, updateOnboarding };
}
