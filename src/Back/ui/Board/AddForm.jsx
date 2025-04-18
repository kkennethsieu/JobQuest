import { useForm } from "react-hook-form";
import { useCreateJobs } from "./useCreateJobs";
import { useEditJobs } from "./useEditJobs";
import { formateDateNum } from "../../helper/helper";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { useUser } from "../Authentication/useUser";

function AddForm({ onClose, jobToEdit = {}, viewDetails }) {
  const { id: editId, ...editValues } = jobToEdit;
  const isEditSession = Boolean(editId);
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm({
    defaultValues: isEditSession
      ? {
          ...editValues,
          appliedOn: formateDateNum(new Date(editValues.appliedOn)), // format date for consistency
        }
      : {
          appliedOn: formateDateNum(new Date()),
          status: "Applied",
          type: "Remote",
          deadline: "",
          salary: "",
          location: "",
          url: "",
          description: "",
        },
  });

  const { isCreating, createJobs } = useCreateJobs();
  const { isEditing, editJob } = useEditJobs();

  const isWorking = isCreating || isEditing;

  const prevJobToEdit = useRef(jobToEdit);

  useEffect(() => {
    if (isEditSession && jobToEdit && jobToEdit !== prevJobToEdit.current) {
      console.log("Setting edit values:", editValues);
      reset(editValues);
      prevJobToEdit.current = jobToEdit;
    }
  }, [jobToEdit, isEditSession, reset, editValues]);

  useEffect(() => {
    setTimeout(() => {
      setFocus("company");
    }, 100);
  }, [setFocus]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  function onSubmit(jobs) {
    const formattedJobs = {
      ...jobs,
      deadline: jobs.deadline || null,
      salary: jobs.salary || null,
      location: jobs.location || null,
      url: jobs.url || null,
      description: jobs.description || null,
      userId: user.id,
    };

    if (isEditSession)
      editJob(
        { newJobData: formattedJobs, id: editId },
        {
          onSuccess: () => {
            if (viewDetails) return;
            reset();
            onClose();
          },
        }
      );
    else {
      createJobs(formattedJobs);
      onClose();
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {viewDetails ? null : (
        <h1
          className={`text-2xl font-semibold ${viewDetails ? "" : "mt-4 ml-6"}`}
        >
          {isEditSession ? "Edit a job" : "Add a new job"}
        </h1>
      )}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-3 ${
          viewDetails ? "" : "mt-3"
        }`}
      >
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Company Name*
          </label>
          <input
            {...register("company", { required: "Company name is required" })}
            type="text"
            placeholder="🏠 Company Name"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
          {errors.company && (
            <p className="text-sm text-red-500 mt-1">
              {errors.company.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Position*
          </label>
          <input
            {...register("position", {
              required: "Company position is required",
            })}
            type="text"
            placeholder="🏠 Position"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
          {errors.position && (
            <p className="text-sm text-red-500 mt-1">
              {errors.position.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Status
          </label>
          <select
            {...register("status")}
            defaultValue="Applied"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
            <option>Ghosted</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Salary
          </label>
          <input
            {...register("salary")}
            type="text"
            placeholder="＄ Salary"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Job Type
          </label>
          <select
            {...register("type")}
            defaultValue="Choose"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          >
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Employment Type
          </label>
          <select
            {...register("employmentType")}
            defaultValue="Choose"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          >
            <option>Part-Time</option>
            <option>Full-Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="📍 Location"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            URL
          </label>
          <input
            {...register("url")}
            type="text"
            placeholder="📎 https://example.com"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Applied On
          </label>
          <input
            {...register("appliedOn")}
            type="date"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
          />
        </div>

        <div className="flex flex-col col-span-3">
          <label className="font-semibold mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            {...register("description")}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-48 text-sm md:text-base dark:bg-slate-700 dark:text-white dark:border-slate-600"
            disabled={isWorking}
            placeholder="Write a brief description..."
          />
        </div>

        {/* Save and Close Button */}
        <div className="col-span-3 flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-1 px-3 text-sm md:text-base md:py-2 md:px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            disabled={isWorking}
          >
            {isWorking ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              "Save and Close"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default AddForm;
