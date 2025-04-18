import React from "react";
import Modal from "./Board/Modal";

function ConfirmDialog({
  onCancel,
  onConfirm,
  title,
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
}) {
  return (
    <div className="p-6 max-w-sm bg-white dark:bg-slate-800 rounded-xl shadow-lg text-center space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-md text-sm font-medium bg-gray-200 dark:bg-slate-700 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600 transition"
        >
          {cancelText}
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDialog;
