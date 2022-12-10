import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const AddNote = () => {
  const [no, setNo] = useState("");
  const [name, setName] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNo("");
    setName("");
  };

  const closeFormHandler = () => {
    setNo("");
    setName("");
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
            <Form.Group className="mb-2" controlId="formBasicStudentNo">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={no}
                onChange={(e) => setNo(e.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicStudentName">
              <Form.Label>Note</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                as="textarea"
                rows={4}
                placeholder="Note"
              />
            </Form.Group>

            <div className="mt-3">
              <Button type="submit" disabled={!(name && no)} className="me-2">
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
