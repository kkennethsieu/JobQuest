import { useForm } from "react-hook-form";
import { useCreateTags } from "./useCreateTags";

import { v4 as uuidv4 } from "uuid";
import useTags from "./useTags";

import toast from "react-hot-toast";

function AddTag({ jobId }) {
  const { handleSubmit, register, reset } = useForm();

  const { isCreating, createTags } = useCreateTags();
  const { tags } = useTags(jobId);

  function onSubmit(data) {
    if (tags.length >= 4) {
      toast.error("Cannot have more than 4 tags.");
      return;
    }
    const newTag = {
      id: uuidv4(),
      tag: data.tag,
      createdAt: new Date().toISOString(),
    };
    createTags({ jobId, newTag });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
      <input
        {...register("tag")}
        className="w-full px-3 py-2 text-xs font-medium text-yellow-700 bg-yellow-100 border border-yellow-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200 dark:text-yellow-900 dark:bg-yellow-100 dark:border-yellow-500 dark:focus:ring-yellow-700"
        placeholder="+ Add Tag"
        disabled={isCreating}
        type="text"
        autoComplete="off"
      />
    </form>
  );
}

export default AddTag;
