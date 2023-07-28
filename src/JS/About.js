import React from "react";
import data from "../Data/Employee.json";
import "../Style/About.css";

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <h2>About Us</h2>
      <p>
        Welcome to Book Your trip , your ultimate travel companion. We are a
        leading online travel agency dedicated to making your travel experience
        seamless and unforgettable. With a wide range of services including
        flights, hotels, trains, buses, and holiday packages, we strive to meet
        all your travel needs.
      </p>
      <p>
        Our mission is to provide you with the best travel deals, exceptional
        customer service, and a user-friendly platform that makes booking your
        trips a breeze. Whether you're planning a business trip, family
        vacation, or solo adventure, we've got you covered.
      </p>
      <p>
        At Book Your trip , we value your trust and prioritize your safety. We
        work with trusted partners and adhere to strict quality standards to
        ensure that every aspect of your journey meets your expectations.
      </p>
      <hr />
      <h3>Our Leadership</h3>
      <ul className='employee-list'>
        {data.map((item) => (
          <li className='card' key={item.id}>
            <img src={item.img} alt={item.name} className='employee-image' />
            <div className='employee-details'>
              <input
                type='text'
                disabled
                className='employee-name'
                value={item.name}
              />
              <input
                type='text'
                disabled
                className='employee-role'
                value={item.role}
              />
            </div>
          </li>
        ))}
      </ul>

      <p>
        Thank you for choosing Book Your trip . We look forward to being a part
        of your travel experiences and helping you create lasting memories.
      </p>
      <hr />
    </div>
  );
};

export default AboutUs;
