import { useState } from "react";

import { FaNoteSticky } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { HiMiniLightBulb } from "react-icons/hi2";

import ViewDetails from "./ViewDetails";
import AddForm from "../AddForm";
import Notes from "./Notes/Notes";

function ViewNav({ jobToView, currentView, setCurrentView }) {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <>
      <div className="flex space-x-2 md:space-x-4 w-full border-t border-b py-4 border-t-gray-300 border-b-gray-300">
        <button
          className="flex gap-2 items-center px-3 py-1 lg:px-4 lg:py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors duration-200 "
          onClick={() => setCurrentView("details")}
        >
          <HiMiniLightBulb className="text-xs md:text-sm" />
          <span className="font-semibold text-xs md:text-sm">Details</span>
        </button>
        <button
          className="flex gap-2 items-center px-3 py-1 lg:px-4 lg:py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors duration-200"
          onClick={() => {
            setCurrentView("edit");
            setViewDetails(!viewDetails);
          }}
        >
          <MdEdit className="text-xs md:text-sm" />
          <span className="font-semibold text-xs md:text-sm">Edit</span>
        </button>
        <button
          className="flex gap-2 items-center px-3 py-1 lg:px-4 lg:py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors duration-200"
          onClick={() => setCurrentView("notes")}
        >
          <FaNoteSticky className="text-xs md:text-sm" />
          <span className="font-semibold text-xs md:text-sm">Notes</span>
        </button>
      </div>

      {currentView === "details" && <ViewDetails jobToView={jobToView} />}
      {currentView === "edit" && (
        <AddForm
          jobToEdit={jobToView}
          viewDetails={() => {
            viewDetails;
          }}
        />
      )}
      {currentView === "notes" && <Notes jobToView={jobToView} />}
    </>
  );
}

export default ViewNav;
