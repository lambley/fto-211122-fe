import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const UploadForm = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1>Upload Image below</h1>
      <Form onChange={(e) => handleChange(e)}>
        <img src={image} alt="" className="img-preview" />
        <Form.Group>
          <Form.Control type="file" name="myImage"></Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
      <hr />
    </div>
  );
};

export default UploadForm;
