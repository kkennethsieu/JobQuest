import TagItem from "./TagItem";
import useTags from "./useTags";
import Spinner from "../../../Spinner";
import AddTag from "./AddTag";

function Tags({ jobToView }) {
  const jobId = jobToView.id;
  const { isLoading, tags } = useTags(jobId);

  if (isLoading) return <Spinner />;

  if (!tags) return null;

  const limitedTags = tags.slice(0, 4);

  return (
    <div className="flex md:space-x-3 space-x-2 items-center border-t border-t-gray-300 py-2">
      <AddTag jobId={jobId} />

      {limitedTags.map((tag) => (
        <TagItem tag={tag} key={tag.id} jobId={jobId} />
      ))}
    </div>
  );
}

export default Tags;
