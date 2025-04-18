function StatItem({ title, color, icon, value }) {
  return (
    <div className="flex flex-row items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 dark:border-gray-700 shadow hover:shadow-md transition-shadow duration-200 h-18 w-full space-x-4">
      <div
        className={`w-14 sm:w-16 h-14 flex items-center justify-center rounded-xl ${color} text-2xl md:text-3xl`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm md:text-sm text-gray-500 dark:text-gray-300 uppercase tracking-wide">
          {title}
        </p>
        <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatItem;
