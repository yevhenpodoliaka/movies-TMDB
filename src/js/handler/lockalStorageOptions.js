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
      addToQueue.textContent = 'delete from queue';
      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'add to queue';
      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'add to watched';
      localStorageApi.addMovieToQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'delete from queue';
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
      addWached.textContent = 'delete from watched';
      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'add to watched';
      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'add to queue';
      localStorageApi.addMovieToWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'delete from watched';
      return;
    }
  }
}
