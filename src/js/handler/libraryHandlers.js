import { renderlibraryWatched, renderlibraryQueue } from '../renderLibrary';
export { onWatchedBtnClick, onQueueBtnClick };

function onWatchedBtnClick(e) {
  const btnWatched = document.querySelector('.library__options-watched');
  const btnQueue = document.querySelector('.library__options-queue');
  if (e.target.classList.contains('library__options-watched')) {
    renderlibraryWatched();
    btnQueue.classList.remove('current-page');
    btnWatched.classList.add('current-page');
  }
}

function onQueueBtnClick(e) {
  const btnWatched = document.querySelector('.library__options-watched');
  const btnQueue = document.querySelector('.library__options-queue');
  if (e.target.classList.contains('library__options-queue')) {
    renderlibraryQueue();
    btnWatched.classList.remove('current-page');
    btnQueue.classList.add('current-page');
  }
}
