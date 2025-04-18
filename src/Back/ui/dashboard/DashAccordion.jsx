import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TaskItem from "./TaskItem";
import { useGetOnboarding } from "./useGetOnboarding";
import { useUser } from "../authentication/useUser";
import Spinner from "../../ui/Spinner";

function DashAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { onboardingStatus, isLoading } = useGetOnboarding(user.id);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-5 px-6 cursor-pointer bg-gradient-to-r from-blue-50 to-white dark:from-blue-900 dark:to-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
      >
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          🎉 Let's get you started
        </p>
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition">
          {isOpen ? <IoIosArrowUp size="20" /> : <IoIosArrowDown size="20" />}
        </button>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="px-6 pb-5 pt-2 space-y-4 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-300">
            Get the most out of{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              JobQuest
            </span>{" "}
            by completing the following tasks:
          </p>

          <div className="space-y-3">
            {onboardingStatus.map((task) => (
              <TaskItem key={task.id} task={task} id={task.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashAccordion;
