import { useQuery } from "@tanstack/react-query";
import { getOnboarding } from "../../services/apiOnboarding";

export function useGetOnboarding(userId) {
  const { isLoading, data: onboardingStatus } = useQuery({
    queryKey: ["onboardingStatus"],
    queryFn: () => getOnboarding(userId),
  });

  return { isLoading, onboardingStatus };
}
