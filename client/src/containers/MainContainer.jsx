import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { putReview } from '../services/service'
import Review from '../screens/Review/Review';

export default function MainContainer() {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();


//   useEffect(() => {
//   const fect
// })

  const handleReviewUpdate = async (id, reviewData) => {
    const updateReview = await putReview(id, reviewData);
    setReviews((prevState) =>
      prevState.map((review) => {
        return review.id === Number(id) ? updateReview : review;
      })
    );
    history.push('/reviews');
  };
  return (
    <Switch>
      <Route path='/reviews'>
        <Review reviews={reviews} handleReviewUpdate={handleReviewUpdate} />
      </Route>
    </Switch>
  )

}