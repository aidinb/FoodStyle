import {cuisineAPI} from './baseUrl.ts';
import { Category } from "./types.ts";

export const getCategories = (): Promise<Category[]> =>
  cuisineAPI.get('/').then(res => res.data);
