import React from 'react';
import { getServices } from '../../services/service';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// import Layout from '../../layouts/Layout';


export default function Listing(props) {

  // const [services, setServices] = useState({});
  

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     const allServices = await getServices()
  //       setServices(allServices)
    
  //     }
  //   fetchServices();
  // }, [])



  console.log(props.services)


  return (
    
      
    <div>
      <h3>Listings</h3>
      {props.services.map((service) => (
        <p key={service.id}>{service.name}</p>
      ))}
      </div>
      
  )
}
