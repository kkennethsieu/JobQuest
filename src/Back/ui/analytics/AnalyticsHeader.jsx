import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const buttons = [
  { label: "Last 7 days", value: "7" },
  { label: "Last 14 days", value: "14" },
  { label: "Last 30 days", value: "30" },
  { label: "All", value: "all" },
];

function AnalyticsHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get("last");

  useEffect(() => {
    if (!currentSearch) {
      searchParams.set("last", "7");
      setSearchParams(searchParams);
    }
  }, [currentSearch, searchParams, setSearchParams]);

  function handleClick(e) {
    searchParams.set("last", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Analytics
      </h2>
      <div className="flex md:justify-end gap-2 bg-white dark:bg-gray-800 shadow-md p-2 rounded-xl text-xs lg:text-sm">
        {buttons.map((btn) => (
          <button
            key={btn.value}
            onClick={handleClick}
            value={btn.value}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              currentSearch === btn.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-500 dark:hover:text-white"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsHeader;
