import React, { useState, useEffect } from "react";
import "../Style/Hotel.css";
import hotelsData from "../Data/Hotel.json";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    setHotels(hotelsData);
    setFilteredHotels(hotelsData);
  }, []);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    if (Array.isArray(hotels) && hotels.length > 0) {
      const updatedHotels = getFilteredHotels();
      setFilteredHotels(updatedHotels);
    }
  }, [city, minPrice, maxPrice, hotels]);

  const getFilteredHotels = () => {
    let filteredHotels = getHotelsInCity(city);

    if (minPrice !== "") {
      filteredHotels = filteredHotels.filter(
        (hotel) => hotel.price >= parseInt(minPrice)
      );
    }

    if (maxPrice !== "") {
      filteredHotels = filteredHotels.filter(
        (hotel) => hotel.price <= parseInt(maxPrice)
      );
    }

    return filteredHotels;
  };

  const getHotelsInCity = (selectedCity) => {
    if (selectedCity === "") {
      return hotels;
    }
    return hotels.filter((hotel) => hotel.city === selectedCity);
  };

  const sortHotelsByPrice = () => {
    const sortedHotels = [...filteredHotels].sort((a, b) => a.price - b.price);
    setFilteredHotels(sortedHotels);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Get unique cities from the hotel data
  const cities = Array.from(new Set(hotels.map((hotel) => hotel.city)));

  return (
    <>
      <div className='toggle-filter'>
        <p onClick={toggleFilterVisibility}>
          {!isFilterVisible ? "Ｏ Filter Open" : "⚫Filter Close"}
        </p>
      </div>
      {isFilterVisible && (
        <div className='filter'>
          <label>City</label>
          <select value={city} onChange={handleChangeCity}>
            <option value=''>All</option>
            {cities.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
          <label>Min Price</label>
          <input
            type='number'
            value={minPrice}
            onChange={handleChangeMinPrice}
            placeholder='Under-300'
          />
          <label>Max Price</label>
          <input
            type='number'
            value={maxPrice}
            onChange={handleChangeMaxPrice}
            placeholder='Over-500'
          />
        </div>
      )}
      <div className='hotel-container'>
        <h2>Book Your Hotel</h2>
        <div className='hotel-list'>
          {filteredHotels.map((hotel) => (
            <div className='hotel-card' key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} />
              <div className='hotel-info'>
                <h3>{hotel.name}</h3>
                <p>City:- {hotel.city}</p>
                <p>Price:- {hotel.price}</p>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotel;
