import supabase from "./supabase";

export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("Error fetching user ");
  }

  return data;
}

export async function updateGoal({ userId, amount }) {
  const { data, error } = await supabase
    .from("users")
    .update({ jobGoal: amount })
    .eq("userId", userId)
    .select("jobGoal");

  if (error) {
    console.error("Failed to update goal:", error.message);
    throw new Error("Failed to update goal");
  }

  return data?.[0]; // Return the updated goal object (optional)
}
