import React from "react";
import './work_gallery.css';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.jpeg';
import image8 from '../../assets/image8.jpeg';
import image9 from '../../assets/image9.jpeg';
const Work_gallery = () => {
  // Replace these URLs with the URLs of your images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ];

  return (
    <div className="bg-rose-300 container mx-auto p-4">
      <h2 className="text-3xl font-a font-bold text-center mb-8">Our Work Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-50 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work_gallery;
