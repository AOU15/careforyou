import api from './config';



export const putReview = async (id, reviewData) => {
  const resp = await api.put(`/reviews/${id}`, { review: reviewData });
  return resp.data;
};