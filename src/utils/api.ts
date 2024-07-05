import {cuisineAPI} from './baseUrl.ts';

export const getCategories = (): Promise<any> =>
  cuisineAPI.get('/').then(res => res.data);
