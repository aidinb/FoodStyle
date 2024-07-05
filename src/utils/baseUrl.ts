import axios, {AxiosInstance} from 'axios';

const cuisineConfig: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  // for using android use below route
  // baseURL: 'http://10.0.2.2:3000',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cuisineAPI = cuisineConfig;
