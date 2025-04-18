import { getToday } from "../helper/helper";
import supabase from "./supabase";

export async function getJobs(userId) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("Jobs could not be loaded");
  }

  return data;
}

// date must be an date: ISOString
export async function getJobsAfterDate(date, userId) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("userId", userId)
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Jobs could not be loaded");
  }

  return data;
}

export async function createEditJob(newJob, id) {
  let query;

  if (!id) {
    // Add new job
    query = supabase.from("jobs").insert([newJob]).select().single();
  } else {
    // Update existing job
    query = supabase.from("jobs").update(newJob).eq("id", id).select().single();
  }

  console.log(newJob);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Error adding or updating job");
  }

  return data;
}

export async function deleteJob(id) {
  const { data, error } = await supabase.from("jobs").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Error deleting job");
  }

  return data;
}
