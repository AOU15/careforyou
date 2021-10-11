import React from "react";
import { getServices } from "../../services/service";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { getAllReviews } from "../../services/review";
import "./Listing.css";


export default function Listing(props) {
  console.log(props.services);
  const imageObj = {
    pulmonology: "https://imgur.com/XnHGPXw.jpg",
    cardiology: 'https://imgur.com/udnSIzs.jpg',
    myology: "https://imgur.com/c4Ojn24.jpg",
    gastroenterology: "https://i.imgur.com/d7OhE6J.jpg",
    osteology: "https://imgur.com/tRPhSke.jpg",
    "nasal physiology": "https://imgur.com/JKyqEG9.jpg",
    "reproductive biology": "https://imgur.com/TFgZyJp.jpg",
  }

  return (
    <div className="listing">
      <h1>Services</h1>

      {props.services.map((service) => (
        <Link to={`/services/${service.id}`}>
        <img
          className="heart-img"
          src={imageObj[service.specialty]}
          alt={service.specialty}
        ></img>
      </Link>
      ))}

    </div>
  );
}
