import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllServices } from '../../services/service';

export default function ServiceDetail(props) {
  const [service, setService] = useState({
    specialist: '',
    description: '',
    image_url: '',


  });

  
  const { id } = useParams();
  

  useEffect(() => {
    const fecthServiceData = async () => {
      const serviceData = await getAllServices(id);
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
    const service = await getAllServices(id)
    setService(service)
  };

  return (
    <div className="service-detail">
      
      <h3>Detail</h3>
      </div>
  )

}