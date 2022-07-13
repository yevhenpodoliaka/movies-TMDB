export { onBtnAddToQueueClick, onBtnAddWachedClick };
import { localStorageApi } from '../utils/localStorageApi';

function onBtnAddToQueueClick(e) {
  if (e.target.dataset.action === 'add-queue') {
    const addToQueue = document.querySelector('.btn-add-queue');
    const addWached = document.querySelector('.btn-add-watched');
    const filmId = e.currentTarget.getAttribute('id');
    if (
      !localStorageApi.isMovieInQueueList(filmId) &&
      !localStorageApi.isMovieInWatchedList(filmId)
    ) {
      localStorageApi.addMovieToQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'видалити з черги';
      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'додати до черги';
      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'додати до переглянутих';
      localStorageApi.addMovieToQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'видалити з черги';
      return;
    }
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-watched') {
    const addWached = document.querySelector('.btn-add-watched');
    const addToQueue = document.querySelector('.btn-add-queue');
    const filmId = e.currentTarget.getAttribute('id');
    if (
      !localStorageApi.isMovieInWatchedList(filmId) &&
      !localStorageApi.isMovieInQueueList(filmId)
    ) {
      localStorageApi.addMovieToWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'видалити з переглянутих';
      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'додати до переглянутих';
      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'додати до черги';
      localStorageApi.addMovieToWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'видалити з переглянутих';
      return;
    }
  }
}
