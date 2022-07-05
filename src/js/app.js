import refs from './refs';
import createMarkupList from './create-markup-list';
import renderModal from './modal';
import ApiService from './api-servise';
import { showPagination } from './panigation';
const api = new ApiService();
export { api };

window.addEventListener('DOMContentLoaded', renderList);
refs.homeBtn.addEventListener('click', onClickBtnHome);

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}

async function renderList() {
  const data = await api.fetchTrending();
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
  showPagination(data.page, data.total_pages);
}

function onClickBtnHome() {
  api.resetPage();
  renderList();
}
