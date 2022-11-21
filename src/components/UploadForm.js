import { Button, Form } from "react-bootstrap";

const UploadForm = () => {
  return <div>
    <div>
      <h1>Upload Image below</h1>
      <Form>
        <Form.Group>
          <Form.Control type='file' name='myImage'></Form.Control>
        </Form.Group>
      </Form>
    </div>
  </div>;
};

export default UploadForm;
