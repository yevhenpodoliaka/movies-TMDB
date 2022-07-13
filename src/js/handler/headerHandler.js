export { onBtnHomeClick, onBtnLibraryClick };
import renderGallery from '../renderGallery';
import { renderlibraryWatched, renderlibraryQueue } from '../renderLibrary';
import { localStorageApi } from '../utils/localStorageApi';
import { onWatchedBtnClick, onQueueBtnClick } from './libraryHandlers';
function onBtnHomeClick() {
  const formEl = document.querySelector('.form');
  formEl.classList.remove('visually-hidden');
  const libraryOptionsEl = document.querySelector('.library__options');
  libraryOptionsEl.classList.add('visually-hidden');
  const paginationWrap = document.querySelector('.pagination');
  paginationWrap.classList.remove('visually-hidden');
  const inputEl = document.querySelector('.form__input');
  inputEl.setAttribute('placeholder', 'search');
  const searchlistOptions = (document.querySelector(
    '.search-list__option'
  ).innerHTML = '');
  renderGallery();
}

function onBtnLibraryClick() {
  if (!localStorageApi.getQueueList() && !localStorageApi.getWatchedList()) {
    alert('add movies from Watched list or Queue list');
    return;
  }
  const formEl = document.querySelector('.form');
  formEl.classList.add('visually-hidden');
  const libraryOptionsEl = document.querySelector('.library__options');
  libraryOptionsEl.classList.remove('visually-hidden');
  libraryOptionsEl.addEventListener('click', onWatchedBtnClick);
  libraryOptionsEl.addEventListener('click', onQueueBtnClick);
  const paginationWrap = document.querySelector('.pagination');
  paginationWrap.classList.add('visually-hidden');
  if (localStorageApi.getWatchedList()) {
    renderlibraryWatched();
    return;
  }

  if (localStorageApi.getQueueList()) {
    localStorageApi.getQueueList();
    return;
  }
}
