import { useUser } from "../Authentication/useUser";

function DashTitle() {
  const { user } = useUser();
  const name = user?.user_metadata?.fullName || "there";

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-xl shadow-sm mb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        👋 Good evening, {name}!
      </h2>
      <h3 className="text-sm sm:text-md text-gray-600 dark:text-gray-300 italic">
        "Success is the sum of small efforts, repeated day in and day out."
      </h3>
    </div>
  );
}

export default DashTitle;
