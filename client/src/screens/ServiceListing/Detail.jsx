import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneService } from "../../services/service";
import { Route, Link } from "react-router-dom";
import './Detail.css'

export default function Detail(props) {
  const [specificService, setSpecificService] = useState(null);
  

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

  
  console.log(props.services);

  return (
    <div className="service-detail">
      <h3>Detail</h3>
        <img className='detail-img' src={specificService?.image_url} />
      <p className="container">{specificService?.specialty}</p>
      <p>{specificService?.description}</p>
      {specificService?.reviews.map((review) => (
        <div className='review-button'>

          <p className='review-content'> {review.content} </p>
          <Link to={`/reviews/${review.id}/services/${specificService?.id}`}>
          <button className='editbutton'>edit</button>
          </Link>
          <button className='deletebutton'onClick={()=> props.handleReviewDelete(review.id)}>delete</button>
        </div>
      ))}
      
      <Link to={`/services/${specificService?.id}/reviews`}>
        <button className='leave-review'>Leave A Review</button>
      </Link>
    </div>
  );
}
