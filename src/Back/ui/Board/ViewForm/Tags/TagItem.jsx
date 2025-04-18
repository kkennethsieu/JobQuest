import { useDeleteTag } from "./useDeleteTag";

function TagItem({ tag, jobId }) {
  const tagLength = tag.tag.slice(0, 10);

  const { isDeleting, deleteTags } = useDeleteTag();

  function handleDelete() {
    deleteTags({ jobId, tagIdToDelete: tag.id });
  }

  return (
    <div className="group flex items-center px-3 py-2 bg-yellow-100 border border-yellow-300 rounded-full uppercase text-yellow-800 text-xs font-medium transition-all duration-300 max-w-[120px] hover:bg-yellow-200">
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">
        {tagLength}
      </p>
      <button disabled={isDeleting} className="ml-2" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default TagItem;
