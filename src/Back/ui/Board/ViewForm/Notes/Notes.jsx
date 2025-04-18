import AddNote from "./AddNote";
import NotesItem from "./NotesItem";
import useNotes from "./useNotes";
import Spinner from "../../../Spinner";

function Notes({ jobToView }) {
  const jobId = jobToView.id;
  const { isLoading, notes } = useNotes(jobId);

  if (!notes) return null;

  const limitedNotes = notes.slice(0, 6);

  console.log(limitedNotes);

  if (isLoading) return <Spinner />;

  return (
    <div className="px-3 py-3 grid grid-cols-3 gap-3">
      <AddNote jobId={jobId} />
      {limitedNotes.map((note) => (
        <NotesItem note={note} key={note.id} jobId={jobId} />
      ))}
    </div>
  );
}

export default Notes;
