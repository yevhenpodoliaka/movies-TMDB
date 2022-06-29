import { createMarkupCard, createMarkupList } from './markup';
import refs from './refs';
import Search from './api-servise';

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
  const query = e.target.elements.input.value;
  const data = await search.fetchByWord(query);
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}

async function onDecrementBtnClick() {
  search.decrementPage();
  onHomePage();
}
async function onIncrementBtnClick() {
  search.incrementPage();
  onHomePage();
}

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}
function uppendMarkapModal(string) {
  refs.backdrop.innerHTML = string;
}
// ------Modal----------------
async function onCardClick(e) {
  if (e.target.classList.contains('gallery__item')) {
    const filmId = e.target.getAttribute('id');
    const data = await search.fetchById(filmId);
    refs.backdrop.classList.remove('visually-hidden');

    const markup = await createMarkupCard(data);
    await uppendMarkapModal(markup);
    refs.backdrop.addEventListener('click', onBtnCloseModalClick);
    refs.backdrop.addEventListener('click', onBtnAddToQueueClick);
    refs.backdrop.addEventListener('click', onBtnAddWachedClick);
  }
}

function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
   
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
  }
}
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    refs.backdrop.classList.add('visually-hidden');
  }
}
