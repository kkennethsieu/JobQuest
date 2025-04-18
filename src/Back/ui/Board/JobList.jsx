import { useState } from "react";
import { useChangeView } from "../../../context/ChangeViewContext";

import JobItem from "./JobItem";
import Modal from "./Modal";
import AddForm from "./AddForm";

import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { MdOutlineAdd } from "react-icons/md";
import { useDroppable } from "@dnd-kit/core";

function JobList({ data: jobs, column, isDraggable = true }) {
  const { title, color, border, open } = column;
  const [isOpen, setIsOpen] = useState(open);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const { isHorizontal } = useChangeView();
  const { setNodeRef } = useDroppable({ id: title });

  if (!column) return null;

  return (
    <>
      {/* HORIZONTAL / VERTICAL WRAPPER */}
      <div
        className={`${
          isHorizontal
            ? "bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md p-4 sm:p-5 min-w-[300px] max-w-sm flex-shrink-0 overflow-hidden"
            : "mb-6 shadow-md bg-gray-50 dark:bg-gray-700"
        }`}
      >
        {/* HEADER */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between ${color}  px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-opacity-90`}
        >
          <p className="flex items-center gap-3 text-sm sm:text-lg font-semibold group">
            {isOpen ? (
              <SlArrowUp
                size={18}
                className="group-hover:text-white transition-colors"
              />
            ) : (
              <SlArrowDown
                size={18}
                className="group-hover:text-white transition-colors"
              />
            )}
            <span className="text-lg sm:text-xl">{title}</span>
            {jobs.length > 0 && (
              <span className="text-xs bg-white text-black dark:bg-gray-100 dark:text-gray-800 px-3 py-0.5 rounded-full font-medium shadow-md">
                {jobs.length}
              </span>
            )}
          </p>
        </div>

        {/* JOB LIST */}
        {isOpen && (
          <div className="py-4">
            {/* COLUMN HEADINGS (ONLY VERTICAL) */}
            {!isHorizontal && (
              <div className="hidden md:grid grid-cols-4 gap-4 lg:grid-cols-5 lg:gap-8 w-full font-semibold border-b border-gray-300 dark:border-gray-600 px-4 sm:px-8 pb-4 pt-2 mb-2 place-items-start text-xs text-slate-500 dark:text-slate-200 uppercase tracking-wide">
                <div>Company</div>
                <div>Position</div>
                <div>Location</div>
                <div>Applied</div>
                <div className="hidden lg:block">Status</div>
              </div>
            )}

            {/* EMPTY STATE */}
            {jobs.length === 0 ? (
              <div
                ref={isHorizontal && isDraggable ? setNodeRef : null}
                className="text-center text-sm sm:text-base font-semibold text-gray-500 dark:text-gray-400 mt-8 mb-3"
              >
                No jobs available.{" "}
                <button
                  onClick={() => setIsAddOpen(true)}
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Add a job
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-4">
                <div
                  ref={isHorizontal && isDraggable ? setNodeRef : null}
                  className="flex flex-col gap-4 divide-y  "
                >
                  {jobs.map((job) => (
                    <JobItem
                      job={job}
                      key={job.id}
                      border={border}
                      isDraggable={isDraggable}
                    />
                  ))}
                </div>

                {/* HORIZONTAL ADD BUTTON */}
                {isHorizontal && (
                  <div
                    className="w-full flex items-center justify-center py-4 mt-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-600 dark:hover:text-white transition duration-300 cursor-pointer space-x-0.5"
                    onClick={() => setIsAddOpen(true)}
                  >
                    <MdOutlineAdd />
                    <span>Add a job</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* MODAL FOR ADDING JOB */}
      <Modal open={isAddOpen} onClose={() => setIsAddOpen(false)}>
        <AddForm onClose={() => setIsAddOpen(false)} />
      </Modal>
    </>
  );
}

export default JobList;
