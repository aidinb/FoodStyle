import axios, {AxiosInstance} from 'axios';

const cuisineConfig: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cuisineAPI = cuisineConfig;
