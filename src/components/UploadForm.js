import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendImage();
  };

  const sendImage = async () => {
    const res = await axios.post('http://localhost:3000/s3/direct_post', {
      image: image,
    });
    console.log(res);
  };

  return (
    <div>
      <h1>Upload Image below</h1>
      <Form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
        {image && (
          <div className="img-preview-wrapper">
            <h5>image preview</h5>
            <img src={image} alt="" className="img-preview" />
          </div>
        )}

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
