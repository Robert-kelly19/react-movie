const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const Search = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const Trending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const Popular = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const Drama = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const Comedy = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const TopSearch = async () => {
  const response = await fetch(
    `${BASE_URL}/account/21674180/watchlist/tv?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

// TV Series Endpoints
export const TVPopular = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const TVUpcoming = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const TVTopRated = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const MovieTopRated = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

// Recommendations
export const MovieRecommendations = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const TVRecommendations = async (seriesId) => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/recommendations?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

// Detail fetchers
export const GetMovieDetail = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const GetTVDetail = async (seriesId) => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const GetMovieCast = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast || [];
};

export const GetTVCast = async (seriesId) => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/aggregate_credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast || [];
};

export const GetMovieSimilar = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const GetTVSimilar = async (seriesId) => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/similar?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

