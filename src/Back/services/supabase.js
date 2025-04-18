import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  import.meta.env.supabaseUrl,
  import.meta.env.supabaseKey
);

export default supabase;
