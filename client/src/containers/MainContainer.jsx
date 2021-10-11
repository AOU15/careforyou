import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  postReview,
  putReview,
  getAllReviews,
  deleteReview,
} from "../services/review";
import Review from "../screens/Review/Review";
import ReviewEdit from "../screens/ReviewEdit/ReviewEdit";
import ServiceListing from "../screens/ServiceListing/ServiceListing";
import { getServices } from "../services/service";
import Detail from "../screens/ServiceListing/Detail";
import Suggestion from "../screens/Suggestion/Suggestion";

export default function MainContainer(props) {
  const [toggle, setToggle] = useState(false);
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

  const handleReviewUpdate = async (id, reviewData, serviceId) => {
    const updateReview = await putReview(id, reviewData);

    setToggle((prev) => !prev);
    history.push(`/services/${serviceId}`);
  };

  const handleReviewCreate = async (serviceId, reviewData) => {
    const createReview = await postReview(serviceId, reviewData);

    setToggle((prev) => !prev);
    history.push(`/services/${serviceId}`);
  };

  const handleReviewDelete = async (reviewId) => {
    const editReview = await deleteReview(reviewId);
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <Switch>
        <Route path="/services/:id/reviews">
          <Review handleReviewCreate={handleReviewCreate} />
        </Route>
        <Route path="/services/:id">
          <Detail toggle={toggle} handleReviewDelete={handleReviewDelete} />
        </Route>
        <Route path="/reviews/:id/services/:service_id">
          <ReviewEdit handleReviewUpdate={handleReviewUpdate} />
        </Route>
        <Route path="/services">
          <ServiceListing services={services} />
        </Route>
        <Route exact path="/suggestion">
          <Suggestion />
        </Route>
      </Switch>
    </div>
  );
}
