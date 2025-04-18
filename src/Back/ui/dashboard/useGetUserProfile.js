import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/apiUsers";

export function useGetUserProfile(userId) {
  const { isLoading, data } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserProfile(userId),
  });

  return { isLoading, data };
}
