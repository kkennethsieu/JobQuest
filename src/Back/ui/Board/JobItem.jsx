import { formatDate, formatDateShort } from "../../helper/helper";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import IconButton from "./IconButton";
import { IoMdMore } from "react-icons/io";

import { useDeleteJob } from "./useDeleteJob";
import Modal from "./Modal";
import AddForm from "./AddForm";
import { useEffect, useRef, useState } from "react";
import ViewForm from "./ViewForm/ViewForm";
import { useChangeView } from "../../../context/ChangeViewContext";
import { useDraggable } from "@dnd-kit/core";
import ConfirmDialog from "../ConfirmDialog";

function JobItem({ job, border, isDraggable = true }) {
  const { company, position, appliedOn, status, location, id, salary } = job;
  const { isDeleting, deleteJob } = useDeleteJob();
  const { isHorizontal } = useChangeView();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); //modal
  const [showMore, setShowMore] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    disabled: !isDraggable,
    data: {
      type: "job",
      job,
    },
  });

  const handleMouseDown = () => {
    if (!isHorizontal || !isDraggable) return;
    dragTimeoutRef.current = setTimeout(() => setIsDragging(true), 200);
  };

  const handleMouseUp = () => {
    if (!isHorizontal || !isDraggable) return;
    clearTimeout(dragTimeoutRef.current);
    if (!isDragging) setViewIsOpen(true);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (!isHorizontal || !isDraggable) return;
    clearTimeout(dragTimeoutRef.current);
    setIsDragging(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    }

    if (showMore) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMore]);

  return (
    <>
      <div
        className={`w-full hover:bg-slate-200 dark:hover:bg-slate-700 transition py-4 ${
          isHorizontal
            ? `px-2 sm:px-4 md:px-6 border cursor-grab bg-gray-50 dark:bg-gray-800 rounded-xl border-l-8 ${border} `
            : "px-4 sm:px-6 md:px-8 cursor-default dark:bg-gray-700"
        } ${isDragging ? "opacity-50" : ""}`}
      >
        {/* Desktop View */}
        <div className="flex relative gap-2 items-center">
          <div
            className={`hidden md:flex text-sm place-items-start leading-normal tracking-wide ${
              isHorizontal
                ? "flex md:block flex-col space-y-1"
                : "hidden md:grid lg:grid-cols-5  grid-cols-4 items-center py-3 text-gray-800 dark:text-gray-100 w-full gap-8"
            }`}
            ref={isHorizontal && isDraggable ? setNodeRef : null}
            {...(isHorizontal && isDraggable ? listeners : {})}
            {...(isHorizontal && isDraggable ? attributes : {})}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${isHorizontal && "text-base font-medium"}`}>
              {company}
            </div>
            <div>{isHorizontal ? `👤 ${position}` : position}</div>
            <div>{isHorizontal ? `📍 ${location}` : location}</div>
            <div>
              {isHorizontal
                ? `🗓️ ${formatDateShort(appliedOn)}`
                : formatDate(appliedOn)}
            </div>
            {!isHorizontal && <div className="hidden lg:block">{status}</div>}
          </div>
          <div
            ref={dropdownRef}
            className={` md:block hidden space-x-1.5 ${
              isHorizontal
                ? "top-0 -right-4 absolute"
                : "relative md:inline-block"
            }`}
          >
            <IoMdMore
              onClick={() => setShowMore(!showMore)}
              className="cursor-pointer"
            />
            {showMore && (
              <div className="absolute right-0 mt-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-300 border rounded-lg shadow-lg z-10 p-2 space-y-1 ">
                <IconButton name="View Details">
                  <GrFormView onClick={() => setViewIsOpen(true)} />
                </IconButton>
                <IconButton name="Edit">
                  <MdModeEditOutline onClick={() => setEditIsOpen(true)} />
                </IconButton>
                <IconButton
                  disabled={isDeleting}
                  name="Delete"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <MdDelete />
                </IconButton>
              </div>
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col md:hidden gap-3 text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
          <div className="grid grid-cols-2 gap-1">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Company:
            </span>
            <span className="text-right">{company}</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Position:
            </span>
            <span className="text-right">{position}</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Applied:
            </span>
            <span className="text-right">{formatDate(appliedOn)}</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Location:
            </span>
            <span className="text-right">{location}</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Salary:
            </span>
            <span className="text-right">{salary}</span>
          </div>

          {!isHorizontal && (
            <div className="flex justify-center items-center gap-3 pt-3 border-t border-gray-300 dark:border-gray-700 mt-2">
              <IconButton name="View Details">
                <GrFormView onClick={() => setViewIsOpen(true)} />
              </IconButton>
              <IconButton name="Edit">
                <MdModeEditOutline onClick={() => setEditIsOpen(true)} />
              </IconButton>
              <IconButton
                disabled={isDeleting}
                name="Delete"
                onClick={() => setShowDeleteModal(true)}
              >
                <MdDelete />
              </IconButton>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={editIsOpen}
        onClose={() => setEditIsOpen(false)}
        className="w-full lg:max-w-4xl md:max-w-2xl max-w-xl"
      >
        <AddForm onClose={() => setEditIsOpen(false)} jobToEdit={job} />
      </Modal>

      <Modal
        open={viewIsOpen}
        onClose={() => setViewIsOpen(false)}
        className="w-full lg:max-w-4xl md:max-w-2xl max-w-xl"
      >
        <ViewForm onClose={() => setViewIsOpen(false)} jobToView={job} />
      </Modal>

      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <ConfirmDialog
          title="Confirm Delete"
          message="Are you sure you want to delete?"
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            deleteJob(id);
            setShowDeleteModal(false);
          }}
        />
      </Modal>
    </>
  );
}

export default JobItem;
