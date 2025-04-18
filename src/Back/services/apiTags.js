import supabase from "./supabase";

export async function getTags(jobId) {
  const { data, error } = await supabase
    .from("jobs")
    .select("tags")
    .eq("id", jobId);

  if (error) {
    console.error(error);
    throw new Error("Tags could not be loaded");
  }

  return data[0].tags || [];
}

export async function addTags(jobId, newTag) {
  const { data: existingJob, error: fetchError } = await supabase
    .from("jobs")
    .select("tags")
    .eq("id", jobId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch existing notes");
  }

  const currentTags = existingJob.tags || [];

  const updatedTags = [...currentTags, newTag];

  const { data, error } = await supabase
    .from("jobs")
    .update({ tags: updatedTags })
    .eq("id", jobId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error adding tags");
  }

  return data;
}

export async function updateTag(jobId, tagId, newContent) {
  // Update the note content in the database
  const { data, error } = await supabase
    .from("jobs")
    .select("tags")
    .eq("id", jobId)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  const updatedTags = data.tags.map((tag) =>
    tag.id === tagId ? { ...tag, content: newContent } : tag
  );

  const { updateError } = await supabase
    .from("jobs")
    .update({ tags: updatedTags })
    .eq("id", jobId);

  if (updateError) throw new Error("Failed to update note");

  return updatedTags;
}

export async function deleteTag(jobId, tagIdToDelete) {
  const { data, error: fetchError } = await supabase
    .from("jobs")
    .select("tags")
    .eq("id", jobId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch existing notes");
  }

  const updatedTags = data.tags.filter((tag) => tag.id !== tagIdToDelete);

  const { error: updateError } = await supabase
    .from("jobs")
    .update({ tags: updatedTags })
    .eq("id", jobId);

  if (updateError) throw new Error("Failed to delete note");

  return updatedTags;
}
