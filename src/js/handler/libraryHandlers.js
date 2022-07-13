import { renderlibraryWatched, renderlibraryQueue } from '../renderLibrary';
import { localStorageApi } from '../utils/localStorageApi';
export { onWatchedBtnClick, onQueueBtnClick };

function onWatchedBtnClick(e) {
  const btnWatched = document.querySelector('.library__options-watched');
  const btnQueue = document.querySelector('.library__options-queue');
  if (e.target.classList.contains('library__options-watched')) {
    if (!localStorageApi.getWatchedList()) {
      alert('add movies from Watched list');
      return;
    }
    renderlibraryWatched();
    btnQueue.classList.remove('current-page');
    btnWatched.classList.add('current-page');
  }
}

function onQueueBtnClick(e) {
  const btnWatched = document.querySelector('.library__options-watched');
  const btnQueue = document.querySelector('.library__options-queue');
  if (e.target.classList.contains('library__options-queue')) {
    if (!localStorageApi.getQueueList()) {
      alert('add movies from Queue list');
      return;
    }
    renderlibraryQueue();
    btnWatched.classList.remove('current-page');
    btnQueue.classList.add('current-page');
  }
}
