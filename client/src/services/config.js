import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'https://careforyou-api.herokuapp.com' ? 'http://localhost:3000';

const api = axios.create({
  baseUrl: baseUrl,
});

export default api;