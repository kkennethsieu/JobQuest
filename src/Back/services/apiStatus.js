import supabase from "./supabase";

export async function getStatus() {
  const { data: statusColumn, error } = await supabase
    .from("status")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Status could not be loaded");
  }

  return statusColumn;
}

export async function updateStatus(jobId, newStatus) {
  const { data, error } = await supabase
    .from("jobs")
    .update({ status: newStatus })
    .eq("id", jobId);

  if (error) throw new Error("Failed to update status");

  return data;
}
