import React, { useState, useEffect } from "react";
import "../Style/Flight.css";

const Flight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Perform booking logic here
    console.log("Flight booking form submitted");
    console.log("From:", from);
    console.log("To:", to);
    console.log("Departure Date:", departureDate);
    console.log("Return Date:", returnDate);
    console.log("Passengers:", passengers);
    console.log("Class Type:", classType);

    setIsSubmitting(false);
  };

  return (
    <div className='flight-container'>
      <h2>Book Your Flight</h2>
      {isSubmitting ? (
        <div className='loading-animation'>
          <div className='spinner'></div>
          <span>Submitting...</span>
        </div>
      ) : (
        <form className='flight-form' onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label>From:</label>
            <input
              type='text'
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder='Departure'
              required
            />
          </div>
          <div className='form-group'>
            <label>To:</label>
            <input
              type='text'
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder='Destination'
              required
            />
          </div>
          <div className='form-group'>
            <label>Departure Date:</label>
            <input
              type='date'
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Return Date:</label>
            <input
              type='date'
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Passengers:</label>
            <input
              type='number'
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value))}
              placeholder='No. Of Seats'
              required
            />
          </div>
          <div className='form-group'>
            <label>Class:</label>
            <select
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              required>
              <option value='Select Type'>Select a Type</option>
              <option value='economy'>Economy Class</option>
              <option value='business'>Business Class</option>
            </select>
          </div>
          <button className='btn'>Book Now</button>
        </form>
      )}
    </div>
  );
};

export default Flight;
