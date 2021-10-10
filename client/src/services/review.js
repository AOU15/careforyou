import api from './config';

export const getAllReviews = async () => {
  const resp = await api.get('/services/reviews');
  return resp.data;
};

export const getOneReviews = async (id) => {
  const resp = await api.get(`/reviews/${id}`);
  return resp.data;
};

export const postReview = async (serviceId, reviewData) => {
  const resp = await api.post(`/services/${serviceId}/reviews`, { review: reviewData });
  return resp.data;
};

export const putReview = async (serviceId, reviewData) => {
  const resp = await api.put(`/services/${serviceId}/reviews`, { review: reviewData });
  return resp.data;
};

export const deleteReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
};

