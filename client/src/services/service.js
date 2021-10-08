import api from './config';

export const getServices = async () => {
    const resp = await api.get('/services');
    return resp.data;
};

export const getOneService = async (id) => {
  const resp = await api.get(`/service/${id}`);
  return resp.data;
};