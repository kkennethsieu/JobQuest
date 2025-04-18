import Button from "./Button";

function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 py-10 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 dark:text-stone-100">
        Get started with JobQuest today!
      </h2>
      <p className="text-lg text-center text-gray-800 dark:text-gray-100 max-w-xl">
        Join thousands of users who are tracking their job applications,
        improving their job search, and landing their dream jobs with ease.
      </p>
      <Button to="/login">Sign up - it's free</Button>
    </div>
  );
}

export default GetStarted;
