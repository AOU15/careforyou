import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneService } from "../../services/service";
import { Route, Link } from "react-router-dom";
import './Detail.css'

export default function Detail(props) {
  const [specificService, setSpecificService] = useState(null);
  // const [service, setService] = useState({
  //   specialist: '',
  //   description: '',
  //   image_url: '',

  // });

  const { id } = useParams();

  useEffect(() => {
    const fecthServiceData = async () => {
      console.log(id);
      const serviceData = await getOneService(id);
      console.log(serviceData);
      setSpecificService(serviceData);
    };
    fecthServiceData();
  }, [id, props.toggle]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedService(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const service = await getOneService(id)
  //   setService(service)
  // };

  console.log(props.services);

  return (
    <div className="service-detail">
      <h3>Detail</h3>
      <p className="container" key={specificService?.id}>
        {specificService?.specialty}
        {specificService?.description}
      </p>
      {specificService?.reviews.map((review) => (
        <div>

          <p> {review.content} </p>
          <button>edit</button>
          <button onClick={()=> props.handleReviewDelete(review.id)}>delete</button>
        </div>
      ))}
      {/* {specificService?.map((service) => (
        <p className='container' key={service.id}>
          {service.specialty}
          {service.description}
          {/* {service.image_url} */}
      {/* {service.reviews.map((review) => (
           <p> {review.content} </p>
          ))}
        </p>
      ))} */}
      
      <Link to={`/services/${specificService?.id}/reviews`}>
        <button>Leave a Review</button>
      </Link>
    </div>
  );
}
