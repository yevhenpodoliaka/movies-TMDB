const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.searchId = '';
  }

  fetchGenres(type) {
    const url = `${BASE_URL}/genre/${type}/list?api_key=${KEY}&language=en-US`;
    return fetch(url).then(res => res.json());
  }

  async fetchTrending() {
    const url = `${BASE_URL}/trending/all/day?api_key=${KEY}&page=${this.page}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }

  async fetchSearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }

  async fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US&append_to_response=videos`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.videos.results[0].key);
    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  set pageNumber(number) {
    this.page = number;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.searchId;
  }

  set movieId(newId) {
    this.searchId = newId;
  }
}
