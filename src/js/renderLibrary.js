import { localStorageApi } from './utils/localStorageApi';
import ApiService from './utils/api-servise';
import createMarkupList from './templates/markup-list';

export { renderlibraryWatched, renderlibraryQueue };
const api = new ApiService();
async function renderlibraryWatched() {
  const listIdwatched = localStorageApi.getWatchedList();
  const dataArr = await api.fetchMoviesListById(listIdwatched);
  const markup = await createMarkupList(dataArr);
  return uppendWatchedList(markup);
}
function uppendWatchedList(markup) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = markup;
}

async function renderlibraryQueue() {
  const listIdQueue = localStorageApi.getQueueList();
  const dataArr = await api.fetchMoviesListById(listIdQueue);
  const markup = await createMarkupList(dataArr);
  return uppendQueueList(markup);
}
function uppendQueueList(markup) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = markup;
}
