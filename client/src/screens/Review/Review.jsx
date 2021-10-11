import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom'
// import { putReview } from '../../services/review';
// import Layout from '../../layouts/Layout';

import './Review.css'



export default function Review(props) {
  // const [isUpdated, setUpdated] = useState(false);
  const [formData, setFormData] = useState({
    content: '',
  });
  const { id } = useParams();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
   
    <form className='review-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleReviewCreate(id, formData);
      }}
    >
      <h3>Review</h3>
      
      <label>
        Comment:
        <input className='comment'
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      
    </form>
  );
}


