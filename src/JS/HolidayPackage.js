import React, { useState } from "react";
import holidayPackages from "../Data/Holidays.json";
import "../Style/Holidays.css";
import WhyUs from "../JS/WhyUs";
import Contact from "../JS/Contact";

const HolidayPackages = () => {
  const [selectedImages, setSelectedImages] = useState({});

  const handleImageClick = (packageId, image) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [packageId]: image,
    }));
  };

  return (
    <>
      <h1>Holiday Packages</h1>
      <div className='holiday-packages'>
        {holidayPackages.map((packages) => {
          const selectedImage =
            selectedImages[packages.id] || packages.images[0];

          return (
            <div className='package' key={packages.id}>
              <h2>{packages.destination}</h2>
              <div className='image-slider'>
                <div className='selected-image-container'>
                  <img
                    src={selectedImage.src}
                    alt={packages.destination}
                    className='selected-image'
                  />
                </div>
              </div>
              <div className='upcoming-images'>
                {packages.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={packages.destination}
                    className={`upcoming-image ${
                      selectedImages[packages.id] === image ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(packages.id, image)}
                  />
                ))}
              </div>
              <p>{packages.description}</p>
              <p>Average Cost Per Head</p>
              <p className='Cost'>Cost: {packages.price}</p>
              <button>Book</button>
              <hr />
            </div>
          );
        })}
      </div>
      <hr />
      <WhyUs />
      <hr />
      <Contact />
    </>
  );
};

export default HolidayPackages;
