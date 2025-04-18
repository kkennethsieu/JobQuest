import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get("search");

  function handleSearchChange(e) {
    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center w-full lg:max-w-xs md:max-w-[10rem] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 sm:py-2 shadow-sm dark:shadow-md">
      <IoSearch
        className="text-gray-500 dark:text-gray-400 mr-2 shrink-0"
        size={18}
      />
      <input
        type="text"
        onChange={handleSearchChange}
        value={currentSearch || ""}
        placeholder="Search..."
        className="flex-1 bg-transparent text-sm sm:text-xs text-gray-700 dark:text-gray-300 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
      />
    </div>
  );
}

export default SearchBar;
