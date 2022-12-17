import { Button } from "react-bootstrap";

const Note = ({ note, deleteNote, actionEdit }) => {
  return (
    <div className="card">
      <div className="card-body" />
      <h5 className="card-title">{`${note?.title}`}</h5>
      <p className="card-text">
        <strong>{note?.note}</strong>
      </p>

      <Button onClick={() => actionEdit(note)}>Edit</Button>
      <hr />
      <Button variant="danger" onClick={() => deleteNote(note)}>
        Delete
      </Button>
    </div>
  );
};

export default Note;
