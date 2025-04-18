import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { useUpdateOnboarding } from "./useUpdateOnboarding";
import { useUser } from "../Authentication/useUser";

function TaskItem({ task }) {
  const { user } = useUser();
  const userId = user.id;
  const { taskName: title, description, isComplete } = task;
  const { updateOnboarding, isLoading } = useUpdateOnboarding();

  function handleUpdate() {
    if (isLoading) return;
    updateOnboarding({ userId, completed: !isComplete, taskName: title });
  }

  return (
    <div
      className={`py-3 px-3 border rounded-md flex space-x-3 items-center transition-colors 
        ${
          isComplete
            ? "bg-green-100 dark:bg-green-200/20"
            : "bg-white dark:bg-gray-800"
        } 
        border-gray-200 dark:border-gray-600`}
    >
      <button
        className="md:text-xl text-sm text-gray-700 dark:text-gray-300"
        onClick={handleUpdate}
        disabled={isLoading}
      >
        {isComplete ? <FaCircleCheck /> : <FaRegCircle />}
      </button>
      <span className="flex flex-col text-gray-800 dark:text-gray-100">
        <p className="md:text-base text-sm font-medium">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </span>
    </div>
  );
}

export default TaskItem;
