export { openModal };
import { onBtnPlayClick } from './onPlayBtnClick';
import {
  onBtnAddToQueueClick,
  onBtnAddWachedClick,
} from './lockalStorageOptions';
// // знімає is.hidden з refs.backdrop та додає слухачів

function openModal() {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.remove('visually-hidden');
  document.addEventListener('keydown', onCloseEsc);
  backdropEl.addEventListener('click', onBtnCloseModalClick);
  backdropEl.addEventListener('click', onBtnAddToQueueClick);
  backdropEl.addEventListener('click', onBtnAddWachedClick);
  backdropEl.addEventListener('click', onBtnPlayClick);
  document.body.addEventListener('wheel', preventScroll, { passive: false });
}
// //додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.add('visually-hidden');
  const modalEl = document.querySelector('.modal');
  modalEl.remove();
  document.removeEventListener('keydown', onCloseEsc);
  backdropEl.removeEventListener('click', onBtnCloseModalClick);
  backdropEl.removeEventListener('click', onBtnAddToQueueClick);
  backdropEl.removeEventListener('click', onBtnAddWachedClick);
  backdropEl.removeEventListener('click', onBtnPlayClick);
  document.body.removeEventListener('wheel', preventScroll, {
    passive: false,
  });
}

// // закриття по Esc
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
// // закриття по кнопкі або по кліку на бєкдроп
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    closeModal();
  }
}
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}