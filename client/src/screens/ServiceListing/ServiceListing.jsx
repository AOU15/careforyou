import React from "react";
import { getServices } from "../../services/service";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { getAllReviews } from "../../services/review";
import "./Listing.css";

// import Layout from '../../layouts/Layout';

export default function Listing(props) {
  console.log(props.services);

  return (
    <div className="listing">
      <h1>Services</h1>

      {/* {props.services.map((service) => (
        <p className='container' key={service.id}>
          {service.specialty}
          {service.description}
          {/* {service.image_url} */}

      {/* {service.reviews.map((review) => (
           <p> {review.content} </p>
          ))}
        </p>
      ))} */}

      <Link to={`/services/${165}`}>
        <img
          className="heart-img"
          src="https://imgur.com/udnSIzs.jpg"
          alt="hearts"
        ></img>
      </Link>

      <Link to={`/services/${164}`}>
        <img
          className="lung-img"
          src="https://imgur.com/XnHGPXw.jpg"
          alt="lungs"
        ></img>
      </Link>

      <Link to={`/services/${166}`}>
        <img
          className="muscle-img"
          src="https://imgur.com/c4Ojn24.jpg"
          alt="muscles"
        ></img>
      </Link>

      <Link to={`/services/${167}`}>
        <img
          className="gastro-img"
          src="https://i.imgur.com/d7OhE6J.jpg"
          alt="gastro"
        ></img>
      </Link>

      <Link to={`/services/${168}`}>
        <img
          className="bones-img"
          src="https://imgur.com/tRPhSke.jpg"
          alt="bones"
        ></img>
      </Link>

      <Link to={`/services/${169}`}>
        <img
          className="nose-img"
          src="https://imgur.com/JKyqEG9.jpg"
          alt="nose"
        ></img>
      </Link>

      <Link to={`/services/${170}`}>
        <img
          className="repro-img"
          src="https://imgur.com/TFgZyJp.jpg"
          alt="reproductive"
        ></img>
      </Link>
    </div>
  );
}
