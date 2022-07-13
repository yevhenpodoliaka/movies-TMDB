import { localStorageApi } from './utils/localStorageApi';
import ApiService from './utils/api-servise';
import createMarkupList from './templates/markup-list';

export { renderlibraryWatched, renderlibraryQueue };
const api = new ApiService();
async function renderlibraryWatched() {
  const listIdwatched = localStorageApi.getWatchedList();
  if (!listIdwatched) {
    alert('add movies from Watched list');
    return;
  }
  const dataArr = await api.fetchMoviesListById(listIdwatched);
  const markup = await createMarkupList(dataArr);
  return uppendLibraryList(markup);
}
function uppendLibraryList(markup) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = markup;
}

async function renderlibraryQueue() {
  const listIdQueue = localStorageApi.getQueueList();
  if (!listIdQueue) {
    alert('add movies from Queue list');
    return;
  }
  const dataArr = await api.fetchMoviesListById(listIdQueue);
  const markup = await createMarkupList(dataArr);
  return uppendLibraryList(markup);
}
