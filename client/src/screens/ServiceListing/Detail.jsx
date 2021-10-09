import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneService } from '../../services/service';
import { Route, Link } from 'react-router-dom';





export default function ServiceDetail(props) {
  const [service, setService] = useState({
    specialist: '',
    description: '',
    image_url: '',


  });

  
  const { id } = useParams();
  

  useEffect(() => {
    const fecthServiceData = async () => {
      const serviceData = await getOneService(id);
      setService(serviceData);
    };
    fecthServiceData();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedService(value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const service = await getOneService(id)
    setService(service)
  };

  return (
    <div className="service-detail">
      


      <h3>Detail</h3>
      {service.specialist}
      {service.description}
      <button>Leave a Review</button>


      




      </div>
  )

}