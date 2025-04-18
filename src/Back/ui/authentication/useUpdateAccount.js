import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../../services/apiAuth";

export function useUpdateAccount() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateAccount } = useMutation({
    mutationFn: ({ password, fullName }) =>
      updateUserApi({ password, fullName }),
    onSuccess: () => {
      toast.success("Account successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, updateAccount };
}
