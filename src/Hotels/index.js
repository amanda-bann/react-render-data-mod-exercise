import React from "react";
// import Hotel from Hotel.js
import Hotel from "./Hotel.js";

// Create a callback function to render each hotel
const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }
  // Use the map function to map over the hotels prop and call the renderHotel function in the hotels array
  const hotelListElements = props.hotels.map(renderHotel);
  // Return the hotel list elements inside the unordered list
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
