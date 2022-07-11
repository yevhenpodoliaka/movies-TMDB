export { onBtnHomeClick, onBtnLibraryClick };
import renderGallery from '../renderGallery';
import { renderlibraryWatched } from '../renderLibrary';

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
  formEl.classList.add('visually-hidden');
  const libraryOptionsEl = document.querySelector('.library__options');
  libraryOptionsEl.classList.remove('visually-hidden');
  const paginationWrap = document.querySelector('.pagination');
  paginationWrap.classList.add('visually-hidden');
  renderlibraryWatched();
}
