import axios from 'axios';

import { BASE_URL } from './constants';

export async function fetchPlanets(page) {
  const response = await axios.get(`${BASE_URL}/planets?page=${page}`);
  if (response.data.results) {
    return {
      items: response.data.results.map((item) => ({
        ...item,
        id: item.name.split(' ').join('-').toLowerCase(),
        loaded_films: false,
        loaded_residents: false
      }))
    };
  }
  return [];
}

export async function fetchObjByUrl(url) {
  const response = await axios.get(url);
  return response.data;
}

export async function fetchFilmsForPlanet(planet) {
  try {
    const response = await Promise.all(planet.films.map((film) => fetchObjByUrl(film)));
    return response;
  } catch (error) {
    return error;
  }
}
