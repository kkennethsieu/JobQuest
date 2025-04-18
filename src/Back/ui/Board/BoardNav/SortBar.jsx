import { useSearchParams } from "react-router-dom";

function SortBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "name";

  function handleSortChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full lg:max-w-xs md:max-w-[10rem] flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 shadow-sm dark:shadow-md">
      <label
        htmlFor="sort"
        className="text-xs text-gray-500 dark:text-gray-300 mr-2 whitespace-nowrap hidden md:block"
      >
        Sort by:
      </label>
      <select
        id="sort"
        value={currentSort}
        onChange={handleSortChange}
        className="flex-1 bg-transparent text-xs text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        <option value="name">Company</option>
        <option value="status">Status</option>
        <option value="location">Location: A - Z</option>
        <option value="dateAsc">Date: Most Recent</option>
        <option value="dateDesc">Date: Least Recent</option>
      </select>
    </div>
  );
}

export default SortBar;
