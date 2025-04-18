import supabase from "./supabase";

export async function sendMessage(newMessage) {
  const { data, error } = await supabase
    .from("contactMessages")
    .insert([newMessage]);

  if (error) throw new Error(error.message);

  return data;
}
