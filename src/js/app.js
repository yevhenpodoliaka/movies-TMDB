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
  onHomePage();
}

function onClickBtnLibary() {
  refs.gallery.innerHTML = '';
}

async function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.input.value;
  const data = await search.fetchByWord(query);
  const markup = await uppendMarkapGalleryList(data);
  return await uppendMarkap(markup);
}

async function onDecrementBtnClick() {
  search.decrementPage();
  onHomePage();
  console.log(search.currentPage);
}
async function onIncrementBtnClick() {
  search.incrementPage();
  onHomePage();
  console.log(search.currentPage);
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
  }
}
//  refs.closeModal.addEventListener('click', onBtnCloseModalClick);
// refs.addToQueue.addEventListener('click', onBtnAddToQueueClick);
// refs.addWached.addEventListener('click', onBtnAddWachedClick);
function onBtnCloseModalClick() {
  refs.backdrop.classList.add('visually-hidden');
}
