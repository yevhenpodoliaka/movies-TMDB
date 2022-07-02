import refs from './refs';
import { renderPaginationBtns } from './pagination';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const URL_TRAND = BASE_URL + 'trending/all/day' + API_KEY;
const URL_POPULAR =
  BASE_URL + 'discover/movie' + API_KEY + '&sort_by=popularity.desc';

// async function fetchGenereList() {
//   const response = await fetch(
//     BASE_URL + 'genre/movie/list' + API_KEY + '&language=en-US'
//   );
//   const data = await response.json();
//   return data;
// }
// fetchGenereList().then(console.log);
class Search {
  constructor() {
    this.homeUrl = URL_TRAND;
    this.url = URL_TRAND;
    this.currentPage = 1;
    this.currentId = null;
    this.totalPage = null;
  }

  async fetchByUrl() {
    const response = await fetch(this.url + `&page=${this.currentPage}`);
    const data = await response.json();
    this.totalPage = data.total_pages;
    console.log(this.currentPage);
    console.log(this.totalPage);
    // this.showPageNumber();
    this.renderPaginationBtns();

    return data.results;
  }

  async fetchByWord(word) {
    this.url = BASE_URL + 'search/movie' + API_KEY + `&query=${word}`;

    const response = await fetch(this.url + `&page=${this.currentPage}`);
    const data = await response.json();
    this.totalPage = data.total_pages;
    console.log(this.currentPage);
    console.log(this.totalPage);
    // this.showPageNumber();
    this.renderPaginationBtns();

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

  showPageNumber() {
    refs.currentPageNumber.textContent = this.currentPage;
    refs.totalpageNumber.textContent = this.totalPage;
  }

  renderPaginationBtns() {
    refs.pagination.innerHTML = `
  <button class="current-page">${this.currentPage}</button>
  <button>${+this.currentPage + 1}</button>
  <button>${+this.currentPage + 2}</button>
  <button>${+this.currentPage + 3}</button>
  <button>${+this.currentPage + 4}</button>
  <button>${+this.currentPage + 5}</button>
  <button>${+this.currentPage + 6}</button>
  <button>${+this.currentPage + 7}</button>
  <button>${+this.totalPage}</button>`;
  }
}

export default Search;
