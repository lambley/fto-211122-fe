import axios from 'axios';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [imageKeys, setImageKeys] = useState([]);

  const url = 'https://fto-211122.s3.eu-west-1.amazonaws.com/';

  const getImages = async () => {
    const res = await axios.get('http://localhost:3000/s3/get_images');
    setImageKeys(res.data.keys[0]);
  };

  const renderImages = () => {
    return imageKeys.map((item, index) => {
      return (
        <div>
          <img src={`${url}${item}`} alt="" key={index}/>
        </div>
      );
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <ul>{renderImages()}</ul>
    </div>
  );
};

export default Gallery;
