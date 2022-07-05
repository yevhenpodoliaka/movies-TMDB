import refs from './refs';
import createMarkupList from './create-markup-list';
import renderModal from './modal';
import Search from './api-servise';
import { showPagination } from './pagination/pagination-service';
import './pagination/pagination-service';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const URL_TRAND = BASE_URL + 'trending/all/day' + API_KEY;
const URL_POPULAR =
  BASE_URL + 'discover/movie' + API_KEY + '&sort_by=popularity.desc';

const search = new Search();

const eventHandlers = () => {
  window.addEventListener('DOMContentLoaded', init);
  refs.pagination.addEventListener('click', changeNavigation);
  // refs.form.addEventListener('submit', onFormSubmit);

  window.onpopstate = init;
};
const getCurrentPage = () => {
  const href = location.href;
  const url = new URL(href);
  let page = url.searchParams.get('page');
  console.log(page);
  return Number(page) ?? 1;
};
async function init() {
  const currentPage = getCurrentPage();
  const data = await search.fetchByUrl(currentPage);
  const totalPages = data.total_pages;
  const markup = await createMarkupList(data.results);
  uppendMarkapGalleryList(markup);
  showPagination(currentPage, totalPages);
}
function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}
async function changeNavigation(e) {
  if (e.target.classList.contains('pangination__btn')) {
    const href = location.href;
    const url = new URL(href);
    const currentPage = Number(e.target.textContent);
    url.searchParams.set('page', currentPage);
    history.pushState({}, '', url.toString());

    const data = await search.fetchByUrl(currentPage);
    const totalPages = data.total_pages;
    const markup = await createMarkupList(data.results);
    uppendMarkapGalleryList(markup);
    showPagination(currentPage, totalPages);
  }
}
// async function onFormSubmit(e) {
//   e.preventDefault();
//   const query = e.target.elements.input.value;
//   location.replace(`//localhost:1234/?query=${query}&page=1`);
//   const data = await search.fetchByWord(query);
//   if (data.results.length === 0) {
//     alert('Search result not successful. Enter the correct movie name and ');
//     return;
//   }
//   const markup = await createMarkupList(data.results);
//   await uppendMarkapGalleryList(markup);
//   const totalPages = data.total_pages;
//   showPagination(currentPage, totalPages);
// }

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}

eventHandlers();
// window.addEventListener('DOMContentLoaded', renderList);
// refs.homeBtn.addEventListener('click', onClickBtnHome);
// refs.form.addEventListener('submit', onFormSubmit);
// refs.gallery.addEventListener('click', onCardClick);

// function onClickBtnHome() {
//   search.currentPage = 1;
//   search.url = search.homeUrl;
//   renderList();
// }

// async function renderList() {
//   const data = await search.fetchByUrl();
//   const markup = await createMarkupList(data);
//   console.log(data);
//   showPagination(search.currentPage, search.totalPage);
//   return await uppendMarkapGalleryList(markup);
// }

// async function onFormSubmit(e) {
//   e.preventDefault();
//   // search.currentPage = 1;
//   const query = e.target.elements.input.value;
//   const data = await search.fetchByWord(query);

//   if (data.length === 0) {
//     alert('Search result not successful. Enter the correct movie name and ');
//     return;
//   }
//   const markup = await createMarkupList(data);
//   return await uppendMarkapGalleryList(markup);
// }

// function uppendMarkapGalleryList(string) {
//   refs.gallery.innerHTML = string;
// }

// ------Modal----------------
// async function onCardClick(e) {
//   const filmId = e.target.getAttribute('id');
//   if (e.target.classList.contains('gallery__item')) {
//     await renderModal(filmId);
//   }
// }
