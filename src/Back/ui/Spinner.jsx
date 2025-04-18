function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-40">
      <div className="relative w-12 h-12">
        {/* Light mode spinner */}
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin dark:border-blue-300 dark:border-t-transparent"></div>
        {/* Dark mode spinner */}
        <div className="absolute inset-0 border-4 border-blue-300 border-b-transparent rounded-full animate-spin-slow dark:border-blue-500 dark:border-b-transparent"></div>
      </div>
    </div>
  );
}

export default Spinner;
