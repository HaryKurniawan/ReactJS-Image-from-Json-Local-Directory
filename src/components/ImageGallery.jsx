import { useEffect, useState } from "react";
import imagesData from "../assets/images.json";
import "../styles/ImageGallery.css"; 

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesData.images);
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.alt} className="gallery-image" />
          <p className="gallery-title">{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
