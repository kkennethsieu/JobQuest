import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

function LeftNav() {
  return (
    <section className="flex flex-row gap-2">
      <SearchBar />
      <SortBar />
    </section>
  );
}

export default LeftNav;
