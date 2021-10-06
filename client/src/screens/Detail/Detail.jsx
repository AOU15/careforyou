import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function ServiceDetail(props) {
  const [service, setService] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    const fecthServiceData = async () => {
      const serviceData = await getOneService(id);
      setService(serviceData);
    };
    fecthServiceData();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedService(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const
  };

  return (
    <h3>Detail</h3>
  )

}