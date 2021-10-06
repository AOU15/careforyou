import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import Layout from '../../layouts/Layout';

export default function Review(props) {
  const [formData, setFormData] = useState({
    name: '',
    specialist: '',
    comment: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleReview = props.reviews.find(review => review.id === Number(id))
      setFormData({
        name: singleReview.patient,
      });
    }
    if (props.reviews.length) {
      prefillFormData();
    }
  }, [props.reviews, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
   
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleReviewUpdate(id, formData);
      }}
    >
      <h3>Review</h3>
      <label>
        Comment:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/reviews'>Review</Link>
      <button>Submit</button>
    </form>
  );
}


