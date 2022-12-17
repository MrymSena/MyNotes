import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import Note from "./Note";
import { doRequest } from "../api/api";
import { toaster, TOASTER_TYPES } from "../utils/utils";
import { deleteNoteEndPoint } from "../api/endpoints/note";

const NoteList = ({ loading, reloadNotes, noteList }) => {
  useEffect(() => {
    reloadNotes();
  }, []);

  const deleteNoteHandler = (note) => {
    console.log(note.noteId);
    doRequest(deleteNoteEndPoint(note)).then((res) => {
      reloadNotes();
      toaster(`${note.title} silindi`, TOASTER_TYPES.SUCCESS);
    });
  };

  const actionEdit = () => {
    //TODO
  };

  return (
    <div className="m-3">
      <div className="row">
        {!loading &&
          noteList?.map((note) => (
            <div
              className="col-lg-3 col-md-4 col-sm-12"
              style={{ paddingBottom: "12px", paddingTop: "12px" }}
              key={note?.noteId}
            >
              <Note
                deleteNote={deleteNoteHandler}
                note={note}
                actionEdit={actionEdit}
              ></Note>
            </div>
          ))}
      </div>
      <div>
        {" "}
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
};

export default NoteList;
