function IconButton({ children, name, onClick, disabled, className }) {
  return (
    <div className="relative group flex items-center rounded-md">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition 
          disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-label={name}
      >
        {children}
      </button>

      {/* Tooltip */}
      <p
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 invisible group-hover:visible 
        text-xs bg-slate-100 dark:bg-slate-700 text-black dark:text-white 
        px-3 py-1 rounded-md whitespace-nowrap shadow-md transition-opacity z-10"
      >
        {name}
      </p>
    </div>
  );
}

export default IconButton;
