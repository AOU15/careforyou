import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneService } from '../../services/service';
import { Route, Link } from 'react-router-dom';
import React from 'react';





export default function Detail(props) {
  
// const [service, setService] = useState({
  //   specialist: '',
  //   description: '',
  //   image_url: '',

  // });

  
  // const { id } = useParams();
  

  // useEffect(() => {
  //   const fecthServiceData = async () => {
  //     const serviceDat  a = await getOneService(id);
  //     setService(serviceData);
  //   };
  //   fecthServiceData();
  // }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedService(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const service = await getOneService(id)
  //   setService(service)
  // };


  console.log(props.services)



  return (
    <div className="service-detail">
      
     

      <h3>Detail</h3>
      {props.services.map((service) => (
        <p className='container' key={service.id}>
          {service.specialty}
          {service.description}
          {/* {service.image_url} */}
          
          {service.reviews.map((review) => (
           <p> {review.content} </p>
          ))}
        </p>
      ))}


      <button>Leave a Review</button>


      




      </div>
  )

}