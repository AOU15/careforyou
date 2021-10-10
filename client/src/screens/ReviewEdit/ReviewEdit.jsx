import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneReview } from '../../services/review';
import "./ReviewEdit.css";

export default function Review(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { id, service_id} = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

useEffect(() => {
  const fetchReview = async () => {
    const review = await getOneReview(id);
    setFormData({
      content: review.content,
    });
  };
  fetchReview();
  }, [ id]);


  

  return (
    <form
      className="review-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleReviewUpdate(id, formData, service_id);
      }}
    >
      <h3>Review</h3>
      <label>
        Comment:
        <input
          className="comment"
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
