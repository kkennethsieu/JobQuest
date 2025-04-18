import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  //1. CREATES A NEW USER
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (signupError) throw new Error(signupError.message);

  const user = signupData.user;

  if (!user) throw new Error("Signup succeeded but user data is missing.");

  //2. CREATES A NEW PROFILE
  const { error: profileError } = await supabase.from("profiles").insert([
    {
      userId: user.id,
      jobGoal: 25,
      email,
      fullName,
    },
  ]);

  if (profileError) throw new Error(profileError.message);

  //3. CREATES A NEW ONBOARDING STATUS CHECKLIST
  const { error: tasksError } = await supabase.from("onboardingStatus").insert([
    {
      userId: user.id,
      taskName: "Add your first job",
      description:
        "Start by adding your first job to the board — it's your first step toward landing it!",
      isComplete: false,
    },
    {
      userId: user.id,
      taskName: "Organize your board",
      description:
        "Drag and drop your jobs between stages like 'Applied', 'Interviewing', and 'Offered' to keep track of your progress.",
      isComplete: false,
    },
    {
      userId: user.id,
      taskName: "Mark your first job as applied",
      description:
        "Once you’ve submitted an application, update the status to 'Applied' and feel that progress!",
      isComplete: false,
    },
    {
      userId: user.id,
      taskName: "Set a weekly goal",
      description:
        "Stay focused and motivated by setting a goal for how many jobs you want to apply to this week.",
      isComplete: false,
    },
  ]);

  if (tasksError) throw new Error(tasksError.message);

  return signupData;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUser({ password, fullName }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  return data;
}
