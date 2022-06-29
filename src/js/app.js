import { createMarkupCard, createMarkupList } from './markup';
import refs from './refs';
import Search from './api-servise';
import Storage from './local-storage';

window.addEventListener('DOMContentLoaded', onHomePage);
refs.homeBtn.addEventListener('click', onClickBtnHome);
refs.libaryBtn.addEventListener('click', onClickBtnLibary);
refs.form.addEventListener('submit', onFormSubmit);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
refs.gallery.addEventListener('click', onCardClick);

async function onHomePage() {
  const data = await search.fetchPopular();
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}

const search = new Search();
const storage = new Storage();

async function renderList() {
  const data = await search.fetchByUrl();
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}

function onClickBtnHome() {
  refs.form.classList.remove('visually-hidden');
  refs.libaryOptions.classList.add('visually-hidden');
  refs.gallery.classList.remove('visually-hidden');
  refs.libary.classList.add('visually-hidden');
  onHomePage();
}

function onClickBtnLibary() {
  refs.form.classList.add('visually-hidden');
  refs.libaryOptions.classList.remove('visually-hidden');
  refs.gallery.classList.add('visually-hidden');
  refs.libary.classList.remove('visually-hidden');
}

async function onFormSubmit(e) {
  e.preventDefault();
  search.currentPage = 1;
  const query = e.target.elements.input.value;
  const data = await search.fetchByWord(query);
  console.log(data);
  if (data.length === 0) {
    refs.errorInfo.textContent =
      'Search result not successful. Enter the correct movie name and ';
    return;
  }
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}

async function onDecrementBtnClick() {
  await search.decrementPage();
  await renderList();
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}
async function onIncrementBtnClick() {
  await search.incrementPage();
  await renderList();
  window.scroll({
    top: 1,
    behavior: 'smooth',
  });
}

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}
function uppendMarkapModal(string) {
  refs.backdrop.innerHTML = string;
}
// ------Modal----------------
async function onCardClick(e) {
  const filmId = e.target.getAttribute('id');
  search.currentId = filmId;
  if (e.target.classList.contains('gallery__item')) {
    const data = await search.fetchById(filmId);

    refs.backdrop.classList.remove('visually-hidden');
    const markup = await createMarkupCard(data);
    await uppendMarkapModal(markup);
  }
  if (storage.watchedList.includes(filmId)) {
  }
  console.log(refs);
  await openModal();
}

function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
    storage.addInQueuedList(search.currentId);
    console.log(localStorage.getItem('queuedList'));
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
    storage.addInWatchedList(search.currentId);
    console.log(localStorage.getItem('watchedList'));
  }
}
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    closeModal();
  }
}
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  refs.backdrop.classList.add('visually-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  refs.backdrop.removeEventListener('click', onBtnCloseModalClick);
  refs.backdrop.removeEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.removeEventListener('click', onBtnAddWachedClick);
}
function openModal() {
  document.addEventListener('keydown', onCloseEsc);
  refs.backdrop.addEventListener('click', onBtnCloseModalClick);
  refs.backdrop.addEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.addEventListener('click', onBtnAddWachedClick);
}
