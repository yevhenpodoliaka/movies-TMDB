const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const URL_TRAND = BASE_URL + 'trending/all/day' + API_KEY;
const URL_POPULAR =
  BASE_URL + 'discover/movie' + API_KEY + '&sort_by=popularity.desc';

async function fetchGenereList() {
  const response = await fetch(
    BASE_URL + 'genre/movie/list' + API_KEY + '&language=en-US'
  );
  const data = await response.json();
  return data;
}
fetchGenereList().then(console.log);
class Search {
  constructor() {
    this.homeUrl = URL_POPULAR;
    this.url = URL_POPULAR;
    this.currentPage = 1;
    // this.currentId = null;
  }
  async fetchByUrl() {
    const response = await fetch(this.url + `&page=${this.currentPage}`);
    const data = await response.json();
    return data.results;
  }

  async fetchByWord(word) {
    this.url = BASE_URL + 'search/movie' + API_KEY + `&query=${word}`;
    console.log(this);
    const response = await fetch(this.url + `&page=${this.currentPage}`);
    const data = await response.json();
    return data.results;
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
