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
  const formEl = document.querySelector('.form');
  const libraryOptionsEl = document.querySelector('.library__options');
  const paginationWrap = document.querySelector('.pagination');
  const btnWatched = document.querySelector('.library__options-watched');
  const btnQueue = document.querySelector('.library__options-queue');
  if (!localStorageApi.getQueueList() && !localStorageApi.getWatchedList()) {
    alert('add movies from Watched list or Queue list');
    return;
  }
  if (localStorageApi.getWatchedList()) {
    formEl.classList.add('visually-hidden');
    libraryOptionsEl.classList.remove('visually-hidden');
    libraryOptionsEl.addEventListener('click', onWatchedBtnClick);
    libraryOptionsEl.addEventListener('click', onQueueBtnClick);
    paginationWrap.classList.add('visually-hidden');
    renderlibraryWatched();
    btnWatched.classList.add('current-page');
    return;
  }

  if (localStorageApi.getQueueList()) {
    formEl.classList.add('visually-hidden');
    libraryOptionsEl.classList.remove('visually-hidden');
    libraryOptionsEl.addEventListener('click', onWatchedBtnClick);
    libraryOptionsEl.addEventListener('click', onQueueBtnClick);
    paginationWrap.classList.add('visually-hidden');
    renderlibraryQueue();
    btnQueue.classList.add('current-page');
    return;
  }
}
