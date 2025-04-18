function Modal({ children, open, onClose, className }) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[1000] dark:bg-black dark:bg-opacity-70 border-none"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`${className} border-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 lg:p-6 rounded-xl shadow-lg z-[1001] dark:bg-gray-800 dark:text-white`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-black text-xl dark:text-gray-300 dark:hover:text-white"
        >
          &times;
        </button>

        {children}
      </div>
    </>
  );
}

export default Modal;
