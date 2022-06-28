const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=b6201d5209ec246f483ea16253167a90";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const URL = BASE_URL + "discover/movie" + API_KEY + "&sort_by=popularity.desc";
// "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>
// & language=en-US & sort_by=popularity.desc & include_adult=false & include_video=false & page=1 & with_watch_monetization_types=flatrate"
class Search {
  constructor() {
    this.allPage = [];
    this.currentPage = 1;
  }

  async fetchPopular() {
    const response = await fetch(
      // BASE_URL + "movie/popular" + API_KEY + `&page=${this.currentPage}`
      URL + `&page=${this.currentPage}`
    );
    const data = await response.json();
    return data.results;
  }
  async fetchByWord(word) {
    const response = await fetch(
      BASE_URL + "search/movie" + API_KEY + `&query=${word}`
    );
    const data = await response.json();
    return data.results;
  }

  async fetchById(movieId) {
    const response = await fetch(
      BASE_URL + `movie/${movieId}` + API_KEY + "&language=en-US"
    );
    const data = await response.json();
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
}

export default Search;
