const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =import.meta.env.VITE_APP_API_KEY
export const Search = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = response.json;
  return data.results;
};

export const Trending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = response.json;
  return data.results;
};

export const Popular = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = response.json;
  return data.results;
};

export const Drama = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`
  );
  const data = response.json;
  return data.results;
};

export const Comedy = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const data = response.json;
  return data.results;
};

export const TopSearch = async () => {
  const response = await fetch(
    `${BASE_URL}/account/21674180/watchlist/tv?api_key=${API_KEY}`
  );
  const data = response.json;
  return data.results;
};
