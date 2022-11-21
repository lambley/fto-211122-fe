import axios from 'axios';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [imageKeys, setImageKeys] = useState([]);

  const url = 'https://fto-211122.s3.eu-west-1.amazonaws.com/';

  const getImages = async () => {
    const res = await axios.get(
      'https://fto-211122.herokuapp.com/s3/get_images'
    );
    setImageKeys(res.data.keys[0]);
  };

  const renderImages = () => {
    return imageKeys.map((item, index) => {
      return (
        <img
          src={`${url}${item}`}
          alt={item}
          key={index}
          className="img-square"
        />
      );
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return <div className="img-grid">{renderImages()}</div>;
};

export default Gallery;
