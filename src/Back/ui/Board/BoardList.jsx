import { useSearchParams } from "react-router-dom";
import { useChangeView } from "../../../context/ChangeViewContext";

import JobList from "../Board/JobList";
import useJobs from "./useJobs";
import Spinner from "../Spinner";
import useStatus from "./useStatus";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useUpdateStatus } from "./useUpdateStatus";
import { useState } from "react";
import { useUser } from "../authentication/useUser";

function BoardList() {
  const { user, isLoading: loadingUser } = useUser();
  const { isLoading: loadingJobs, jobs } = useJobs(user.id);
  const { loadingStatus: loadingStatus, statusColumn } = useStatus();
  const { updateStatus } = useUpdateStatus();
  const { isHorizontal } = useChangeView();
  const [searchParams] = useSearchParams();

  const [activeId, setActiveId] = useState(null);
  const [activeBorder, setActiveBorder] = useState(null);

  const sortBy = searchParams.get("sort") || "name";
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  if (loadingJobs || loadingStatus || loadingUser) return <Spinner />;

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === "name")
      return (a.company || "").localeCompare(b.company || "");
    if (sortBy === "location")
      return (a.location || "").localeCompare(b.location || "");
    if (sortBy === "dateAsc")
      return new Date(b.appliedOn) - new Date(a.appliedOn);
    if (sortBy === "dateDesc")
      return new Date(a.appliedOn) - new Date(b.appliedOn);
    if (sortBy === "status")
      return (a.status || "").localeCompare(b.status || "");
    return 0;
  });

  const filteredJobs = sortedJobs.filter((job) =>
    job.company?.toLowerCase().includes(searchQuery)
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
    // Find the job and its status to get the border color
    const job = filteredJobs.find((job) => job.id === event.active.id);
    if (job) {
      const column = statusColumn.find((col) => col.title === job.status);
      if (column) {
        setActiveBorder(column.border);
      }
    }
  }

  function handleDragEnd(event) {
    setActiveId(null);
    setActiveBorder(null);
    const { active, over } = event;

    if (!over) return;

    const jobId = active.id;
    const newStatus = over.id;

    updateStatus({ jobId, newStatus });
  }

  const activeJob = activeId
    ? filteredJobs.find((job) => job.id === activeId)
    : null;

  return (
    <div className="sm:px-6 mx-auto max-w-screen-3xl pb-10">
      <div
        className={`transition-all duration-300 ease-in-out rounded-xl${
          isHorizontal
            ? "pb-10 pt-2 flex space-x-6 min-w-[1200px] overflow-x-auto"
            : "space-y-6 pb-10 flex flex-col"
        }`}
      >
        {/* ALL JOBS - Not draggable */}
        <Section>
          <JobList
            data={filteredJobs}
            column={{
              id: "all",
              title: "All",
              color:
                "text-emerald-800 bg-emerald-300 dark:text-emerald-400 dark:bg-emerald-800",
              border: "border-l-emerald-500",
              open: true,
            }}
            isDraggable={false}
          />
        </Section>

        {/* STATUS DEPENDENT JOBS - Draggable */}
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          {statusColumn.map((column) => (
            <Section key={column.id}>
              <JobList
                column={column}
                data={filteredJobs.filter((job) => job.status === column.title)}
                isDraggable={true}
              />
            </Section>
          ))}

          <DragOverlay>
            {activeJob ? (
              <div
                className={`w-full px-2 sm:px-4 md:px-6 border cursor-grab bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl border-l-8 py-4 shadow-lg ${
                  activeBorder || "border-l-emerald-500"
                }`}
              >
                <div className="flex flex-col space-y-1">
                  <div className="text-base font-medium">
                    {activeJob.company}
                  </div>
                  <div>{activeJob.position}</div>
                  <div>{activeJob.location}</div>
                  <div>{activeJob.status}</div>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}

// Reusable animation wrapper
function Section({ children }) {
  return (
    <div className="transition-all duration-300 ease-in-out rounded-xl">
      {children}
    </div>
  );
}

export default BoardList;
