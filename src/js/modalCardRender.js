import ApiService from './utils/api-servise';
import createModalMarkup from './templates/markup-modal';
import { openModal } from './handler/modaCardlOptions';
import { localStorageApi } from './utils/localStorageApi';

const appService = new ApiService();

export default async function renderModalCard(movieId) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.setAttribute('id', movieId);
  try {
    const data = await appService.fetchMovieDetails(movieId);
    const markup = await createModalMarkup(data);
    await uppendModalMarkap(markup);
  } catch (error) {
    console.log(error);
  }
  const addToQueue = document.querySelector('.btn-add-queue');
  const addWached = document.querySelector('.btn-add-watched');
  if (localStorageApi.isMovieInQueueList(movieId)) {
    addToQueue.textContent = 'delete from queue';
    addToQueue.classList.toggle('isActive');
  }
  if (localStorageApi.isMovieInWatchedList(movieId)) {
    addWached.textContent = 'delete from watched';
    addWached.classList.toggle('isActive');
  }
  openModal();
}

function uppendModalMarkap(markup) {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.innerHTML = markup;
}
