import supabase from "./supabase";

export async function getNotes(jobId) {
  const { data, error } = await supabase
    .from("jobs")
    .select("notes")
    .eq("id", jobId);

  if (error) {
    console.error(error);
    throw new Error("Notes could not be loaded");
  }

  return data[0]?.notes || [];
}

export async function addNotes(jobId, newNote) {
  // Step 1: Get existing notes
  const { data: existingJob, error: fetchError } = await supabase
    .from("jobs")
    .select("notes")
    .eq("id", jobId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch existing notes");
  }

  const currentNotes = existingJob.notes || [];

  // Step 2: Add the new note to the array
  const updatedNotes = [...currentNotes, newNote];

  // Step 3: Save the updated array to Supabase
  const { data, error } = await supabase
    .from("jobs")
    .update({ notes: updatedNotes })
    .eq("id", jobId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error updating notes");
  }

  return data;
}

export async function updateNoteContent(jobId, noteId, newContent) {
  // Update the note content in the database
  const { data, error } = await supabase
    .from("jobs")
    .select("notes")
    .eq("id", jobId)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  const updatedNotes = data.notes.map((note) =>
    note.id === noteId ? { ...note, content: newContent } : note
  );

  const { updateError } = await supabase
    .from("jobs")
    .update({ notes: updatedNotes })
    .eq("id", jobId);

  if (updateError) throw new Error("Failed to update note");

  return updatedNotes;
}

export async function deleteNote(jobId, noteIdToDelete) {
  const { data, error: fetchError } = await supabase
    .from("jobs")
    .select("notes")
    .eq("id", jobId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("Failed to fetch existing notes");
  }

  const updatedNotes = data.notes.filter((note) => note.id !== noteIdToDelete);

  const { error: updateError } = await supabase
    .from("jobs")
    .update({ notes: updatedNotes })
    .eq("id", jobId);

  if (updateError) throw new Error("Failed to delete note");

  return updatedNotes;
}
