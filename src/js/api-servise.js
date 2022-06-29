const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const URL = BASE_URL + 'discover/movie' + API_KEY + '&sort_by=popularity.desc';
class Search {
  constructor() {
    this.url = null;
    this.currentPage = 1;
    this.currentId = null;
  }

  async fetchPopular() {
    this.url = URL;
    console.log(this);
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
  async fetchByUrl() {
    const response = await fetch(this.url + `&page=${this.currentPage}`);
    const data = await response.json();
    return data.results;
  }
  async fetchById(movieId) {
    const response = await fetch(BASE_URL + `movie/${movieId}` + API_KEY);
    const data = await response.json();
    return data;
  }

  incrementPage() {
    this.currentPage += 1;
    console.log(this);
  }
  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      console.log(this);
    }
  }
}

export default Search;
