import { useEffect, useRef, useState } from "react";
import { useDeleteNotes } from "./useDeleteNotes";
import { useEditNotes } from "./useEditNotes";
import { formatDate } from "../../../../helper/helper";

function NotesItem({ note, jobId }) {
  const [showItems, setShowItems] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(note.content);

  const { isDeleting, deleteNotes } = useDeleteNotes();
  const { isUpdating, updateNote } = useEditNotes();

  const dropdownRef = useRef(null);

  function handleDelete() {
    deleteNotes({ jobId, noteIdToDelete: note.id });
    setShowItems(false);
  }

  function handleBlur() {
    setIsEditing(false);
    updateNote({ jobId, noteId: note.id, newContent: value });
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowItems(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="px-4 py-4 bg-yellow-50 dark:bg-gray-700 dark:text-white rounded-lg text-sm relative flex flex-col justify-between space-y-2"
    >
      {isEditing ? (
        <textarea
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          className="w-full h-36 px-3 py-2 border border-yellow-200 dark:border-gray-600 rounded-lg bg-yellow-50 dark:bg-gray-800 focus:ring-0 focus:outline-none transition duration-200 resize-none text-sm"
          onBlur={handleBlur}
          disabled={isDeleting || isUpdating}
        />
      ) : (
        <p
          className="break-words text-sm cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {value || "Click to edit"}
        </p>
      )}

      <p className="text-xs text-gray-600 dark:text-gray-400">
        Date Added: {formatDate(note.createdAt)}
      </p>

      <div className="absolute top-1 right-4">
        <button
          disabled={isDeleting || isUpdating}
          onClick={() => setShowItems(!showItems)}
          className="text-lg font-bold text-gray-700 dark:text-gray-300"
        >
          ...
        </button>
        {showItems && (
          <div className="absolute right-0 mt-1 z-50 bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600 py-1 px-2 rounded-md shadow-md">
            <button
              disabled={isDeleting || isUpdating}
              onClick={handleDelete}
              className="block w-full text-left px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-xs"
            >
              Delete Note
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesItem;
