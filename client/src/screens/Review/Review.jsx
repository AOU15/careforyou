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
  
  
  // useEffect(() => {
  //   const prefillFormData = () => {
  //     const singleReview = props.reviews.find(review => review.id === Number(id))
  //     setFormData({
  //       name: singleReview.patient,
  //     });
  //   }
  //   if (props.reviews.length) {
  //     prefillFormData();
  //   }
  // }, [props.reviews, id]);

//   useEffect(() => {
//     const fetchReview = async () => {
//       const formData = await putReview(id)
//       setFormData(formData)
//     }
//     fetchReview()
// }, [id])

  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

// const handleDelete = async (event)

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const updated = await props.handleReviewCreate(id, formData);
//   setUpdated(updated)
// }
// if (isUpdated) {
//   return <Redirect to={`/services/:id`} />
// }





  return (
   
    <form className='review-form'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleReviewCreate(id, formData);
      }}
    >
      <h3>Review</h3>
      
      {/* <label>
        Patient:
        <input
          type='text'
          name='patient'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        service:
        <input
          type='text'
          name='specialist'
          value={formData.specialist}
          onChange={handleChange}
        />
      </label>
      <br /> */}
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


