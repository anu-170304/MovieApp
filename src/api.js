import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = (type, page = 1) =>
  axios.get(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

export const getMovieCredits = (id) =>
  axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

export const searchMovies = (query) =>
  axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
