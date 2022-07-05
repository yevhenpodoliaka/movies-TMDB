import refs from './refs';
import createMarkupList from './create-markup-list';
import renderModal from './modal';
import ApiService from './api-servise';
import { showPagination } from './panigation';

const api = new ApiService();
export { api };

window.addEventListener('DOMContentLoaded', renderList);
refs.homeBtn.addEventListener('click', onClickBtnHome);
refs.form.addEventListener('submit', onFormSubmit);
refs.gallery.addEventListener('click', onCardClick);

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}

async function renderList() {
  const data = await api.fetchTrending();
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
  showPagination(data.page, data.total_pages);
}

async function onFormSubmit(e) {
  e.preventDefault();
  api.searchQuery = e.target.elements.input.value;
  const data = await api.fetchSearchMovie();
  if (data.results.length === 0) {
    alert('Search result not successful. Enter the correct movie name and ');
    return;
  }
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
  showPagination(data.page, data.total_pages);
}
function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}

// ------Modal----------------
async function onCardClick(e) {
  const filmId = e.target.getAttribute('id');
  if (e.target.classList.contains('gallery__item')) {
    await renderModal(filmId);
  }
}

function onClickBtnHome() {
  api.resetPage();
  renderList();
}
