import refs from './refs';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const URL_TRAND = BASE_URL + 'trending/all/day' + API_KEY;
const URL_POPULAR =
  BASE_URL + 'discover/movie' + API_KEY + '&sort_by=popularity.desc';

class Search {
  constructor() {
    this.homeUrl = URL_TRAND;
    this.url = URL_TRAND;
    this.currentPage = 1;
    this.totalPage = null;
  }

  async fetchByUrl(page) {
    const url = new URL(this.url);
    url.searchParams.set('page', page);
    const response = await fetch(this.url);
    const data = await response.json();
    this.totalPage = data.total_pages;
    this.currentlPage = data.page;
    return data;
  }

  async fetchByWord(word) {
    const url = new URL(BASE_URL + 'search/movie' + API_KEY);
    url.searchParams.set('page', 1);
    url.searchParams.set('query', word);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  incrementPage() {
    this.currentPage += 1;
  }
  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  async fetchById(movieId) {
    const response = await fetch(BASE_URL + `movie/${movieId}` + API_KEY);
    const data = await response.json();
    return data;
  }
}

export default Search;
