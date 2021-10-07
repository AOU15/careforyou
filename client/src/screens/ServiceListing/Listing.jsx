import React from 'react';
import { getAllServices } from '../../services/service';
import { useEffect } from 'react'


export default function Listing(props) {

  const [services, setServices] = useState([]);
  

  useEffect(() => {
    const fetchServices = async () => {
      const allServices = await getAllServices()
        setServices(allServices)
    
      }
    fetchServices();
  }, [])





  return (
    <div>
      <h3>Listings</h3>
      {props.services.map(service => (
        <p key={service.id}>{service.name}</p>
      ))}
</div>
  )
}

