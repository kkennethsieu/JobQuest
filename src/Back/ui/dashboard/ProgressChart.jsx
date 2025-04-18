import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";
import useJobs from "../Board/useJobs";
import Spinner from "../Spinner";
import { useGetUserProfile } from "./useGetUserProfile";
import { useUpdateGoal } from "./useUpdateGoal";

function ProgressChart() {
  const { user } = useUser();
  const { isLoading: loadingJobs, jobs } = useJobs(user.id);
  const { isLoading: loadingGoal, data } = useGetUserProfile(user.id);
  const { isLoading: updatingGoal, updateGoal } = useUpdateGoal();
  const { register, handleSubmit, reset } = useForm();

  if (loadingJobs || loadingGoal) return <Spinner />;

  const goalAmount = data?.[0]?.jobGoal || 0;
  const currentAmount = jobs.length || 0;
  const rawPercentage = (currentAmount / goalAmount) * 100;
  const percentage = Math.min(rawPercentage, 100).toFixed(0);

  function onSubmit(formData) {
    updateGoal({ userId: user.id, amount: formData.jobGoal });
    reset();
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 ">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
          Progress
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Visualize your job application progress.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Job Applications Goal
            </p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {`${currentAmount} / ${goalAmount}`}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(rawPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-3 sm:items-center"
      >
        <input
          {...register("jobGoal", { required: "Enter a goal" })}
          type="number"
          min="1"
          className="w-full sm:flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Set new weekly goal"
          disabled={updatingGoal}
        />

        <button
          type="submit"
          disabled={updatingGoal}
          className="w-full lg:w-auto py-2 px-6 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          {updatingGoal ? "Updating..." : "Set Goal"}
        </button>
      </form>
    </div>
  );
}

export default ProgressChart;
