import axios from 'axios';

import { BASE_URL } from './constants';

export async function fetchPlanets(page) {
  try {
    const response = await axios.get(`${BASE_URL}/planets?page=${page}`);
    if (response.data.results) {
      return {
        items: response.data.results.map((item) => ({
          ...item,
          loaded_films: false,
          loaded_residents: false
        }))
      };
    }
    return 'no data';
  } catch (error) {
    return error;
  }
}
