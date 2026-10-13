const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_KEY;

async function request(path) {
  const separator = path.includes('?') ? '&' : '?';
  const res = await fetch(`${BASE_URL}${path}${separator}api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status}`);
  }

  return res.json();
}

export function getPopularMovies() {
  return request('/movie/popular');
}

export function getMovieDetails(id) {
  return request(`/movie/${id}`);
}

export function getPopularSeries() {
  return request('/tv/popular');
}

export function getSeriesDetails(id) {
  return request(`/tv/${id}`);
}