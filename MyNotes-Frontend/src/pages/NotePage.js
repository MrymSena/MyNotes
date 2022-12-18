import AddNote from "../components/AddNote";
import PageTemplate from "./PageTemplate";
import NoteList from "../components/NoteList";
import { useState } from "react";
import { doRequest } from "../api/api";
import { getNotesEndPoint } from "../api/endpoints/note";
import { Button } from "react-bootstrap";

const NotePage = () => {
  const [loading, setLoading] = useState(false);
  const [noteList, setNoteList] = useState();

  const reloadNotes = () => {
    setLoading(true);
    doRequest(getNotesEndPoint)
      .then((resData) => {
        setNoteList(resData);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <PageTemplate pageTitle={"Adding Notes"} showBanner={false}>
      <AddNote reloadNotes={reloadNotes} />
      <div className="m-2">
        <Button onClick={reloadNotes}>Load Note</Button>
      </div>
      <NoteList
        loading={loading}
        reloadNotes={reloadNotes}
        noteList={noteList}
      />
    </PageTemplate>
  );
};

export default NotePage;
