import React from "react";
import "../Style/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className='why-choose-us-container'>
      <h2>Why Choose Us</h2>
      <div className='reasons'>
        <div className='reason'>
          <img src='../Imgs/icon1.png' alt='Icon 1' />
          <h3>Convenient Booking</h3>
          <p>Easy and hassle-free booking process</p>
        </div>
        <div className='reason'>
          <img src='../Imgs/icon2.png' alt='Icon 2' />
          <h3>Wide Selection</h3>
          <p>Choose from a wide range of flights, hotels, and more</p>
        </div>
        <div className='reason'>
          <img src='../Imgs/icon3.png' alt='Icon 3' />
          <h3>Best Deals</h3>
          <p>Get access to exclusive deals and discounts</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
