import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { doRequest } from "../api/api";
import { postNoteEndPoint } from "../api/endpoints/note";
import { toaster, TOASTER_TYPES } from "../utils/utils";

const AddNote = ({ reloadNotes }) => {
  const [title, setTitle] = useState(null);
  const [note, setNote] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    doRequest(postNoteEndPoint({ title, note })).then((res) => {
      reloadNotes();
      toaster(`${title} is added`, TOASTER_TYPES.SUCCESS);
    });
    setTitle(null);
    setNote(null);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{
          maxWidth: "500px",
          minWidth: "300px",
          minHeight: "330px",
          backgroundColor: "#BAABDA",
        }}
      >
        <Card.Body>
          <Card.Title>New Note</Card.Title>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-2" controlId="">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicNoteNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                value={note ? note : ""}
                type="text"
                onChange={(e) => setNote(e.target.value)}
                as="textarea"
                rows={4}
                placeholder="Note"
              />
            </Form.Group>

            <div className="mt-3">
              <Button
                type="submit"
                disabled={!(title && note)}
                className="me-2"
              >
                Save
              </Button>
              <Button type="reset">Cancel</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddNote;
