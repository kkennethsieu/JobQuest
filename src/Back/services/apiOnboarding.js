import supabase from "./supabase";

export async function getOnboarding(userId) {
  const { data: onboardingStatus, error } = await supabase
    .from("onboardingStatus")
    .select("*")
    .eq("userId", userId);

  if (error) throw new Error(error.message);

  return onboardingStatus;
}

export async function updateOnboarding({ userId, completed, taskName }) {
  const { data, error } = await supabase
    .from("onboardingStatus")
    .update({ isComplete: completed })
    .eq("userId", userId)
    .eq("taskName", taskName)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
