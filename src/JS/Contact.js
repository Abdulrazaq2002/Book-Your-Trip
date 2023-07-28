import React from "react";
import "../Style/Contact.css";

const ContactUs = () => {
  return (
    <div className='container-contact'>
      <div className='contact-us-container'>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or need assistance, feel free to
          reach out to our customer support team. We're here to help!
        </p>
        <div className='contact-info'>
          <h2>Contact Information:</h2>
          <ul>
            <li>Email: support@bookmytrip.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
      <form className='contact-form'>
        <h3>Tell You If You Face Any Issue While Using Our Services</h3>
        <label>*Your Issue*</label>
        <input type='text' placeholder='Enter Your Issue' />
        <label>*Your Gmail*</label>
        <input type='email' placeholder='Enter Your Email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
