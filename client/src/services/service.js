import api from './config';

export const getAllServices = async () => {
  const resp = await api.get('/services');
  return resp.data;
};