import { useForm } from "react-hook-form";
import { useCreateNotes } from "./useCreateNotes";

import { v4 as uuidv4 } from "uuid";

function AddNote({ jobId }) {
  const { register, handleSubmit, reset } = useForm();
  const { isCreating, createNotes } = useCreateNotes();

  function onSubmit(data) {
    const newNote = {
      id: uuidv4(),
      content: data.note,
      createdAt: new Date().toISOString(),
    };
    createNotes({ jobId, newNote });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative col-span-3">
      <textarea
        {...register("note")}
        placeholder="Add a note..."
        maxLength={200}
        className="w-full h-28 px-5 py-5 bg-yellow-50 dark:bg-gray-700 dark:text-white text-black rounded-lg focus:ring-0 focus:outline-none"
        disabled={isCreating}
        required
      />
      <button
        className="absolute bottom-5 right-6 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-sm rounded-md dark:bg-blue-700 dark:hover:bg-blue-800"
        disabled={isCreating}
      >
        Add
      </button>
    </form>
  );
}

export default AddNote;
