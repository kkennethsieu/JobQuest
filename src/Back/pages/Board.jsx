import BoardList from "../ui/Board/BoardList";
import LeftNav from "../ui/Board/BoardNav/LeftNav";
import RightNav from "../ui/Board/BoardNav/RightNav";

function Board() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5 space-y-2 bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col px-3 mt-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Boardlist
        </h2>
        <div className="flex flex-row gap-2 bg-gray-50 dark:bg-gray-800  py-3.5 px-3 rounded-xl justify-end">
          <LeftNav />
          <RightNav />
        </div>
      </div>
      <BoardList />
    </div>
  );
}

export default Board;
