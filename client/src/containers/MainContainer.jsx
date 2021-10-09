import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { putReview, getAllReviews } from "../services/review";
import Review from "../screens/Review/Review";
import ServiceListing from "../screens/ServiceListing/ServiceListing";
import { getServices } from "../services/service";
import ServiceDetail from "../screens/ServiceListing/Detail";
import Suggestion from "../screens/Suggestion/Suggestion";

export default function MainContainer(props) {
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchServices = async () => {
      const serviceList = await getServices();
      setServices(serviceList);
      console.log(serviceList);
    };
    fetchServices();
  }, []);

  // console.log(service)

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getAllReviews();
      setReviews(reviewList);
      console.log(reviewList);
    };
    fetchReviews();
  }, []);

  const handleReviewUpdate = async (id, reviewData) => {
    const updateReview = await putReview(id, reviewData);
    setReviews((prevState) =>
      prevState.map((review) => {
        return review.id === Number(id) ? updateReview : review;
      })
    );
    history.push("/reviews");
  };

  return (
    <div>
      {props.user}
      <Switch>
        <Route path="/services">
          <ServiceListing services={services} reviews={reviews} />
        </Route>
        
        <Route path="/reviews">
          <Review reviews={reviews} handleReviewUpdate={handleReviewUpdate} />
        </Route>
        
        <Route exact path="/suggestion">
          <Suggestion />
        </Route>

        <Route path='/service/:id'>  
            <ServiceDetail />
          </Route>

        
          
        
      </Switch>
      {props.children}
    </div>
  );
}
