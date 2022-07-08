import ApiService from './utils/api-servise';
import createModalMarkup from './templates/markup-modal';
import { openModal } from './handler/modaCardlOptions';
import { localStorageApi } from './utils/localStorageApi';

const appService = new ApiService();

export default async function renderModalCard(movieId) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.setAttribute('id', movieId);
  // try {
  const data = await appService.fetchMovieDetails(movieId);
  console.log(data);
  const markup = await createModalMarkup(data);

  await uppendModalMarkap(markup);
  openModal();
  // } catch (error) {
  //   console.log(error);
  //   return;
  // }

  const addToQueue = document.querySelector('.btn-add-queue');
  const addWached = document.querySelector('.btn-add-wached');
  if (localStorageApi.isMovieInQueueList(movieId)) {
    addToQueue.textContent = 'delete to queue';
    addToQueue.classList.toggle('isActive');
    addWached.disabled = true;
  }
  if (localStorageApi.isMovieInWatchedList(movieId)) {
    addWached.textContent = 'delete to Wached';
    addWached.classList.toggle('isActive');
    addToQueue.disabled = true;
  }
}

async function uppendModalMarkap(markup) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}
