// import createModalMarkup from './templates/markup-modal';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

// const galleryEL = addEventListener('click', onCardClick);

// async function onCardClick(e) {
//   const filmId = e.target.getAttribute('id');
//   if (e.target.classList.contains('gallery__item')) {
//     await renderModal(filmId);
//   }
// }

// async function renderModal(filmId) {
//   refs.backdrop.setAttribute('id', filmId);
//   const data = await api.fetchMovieDetails(filmId);
//   const markup = await createModalMarkup(data);
//   await uppendModalMarkap(markup);
//   refs.addToQueue = document.querySelector('.btn-add-queue');
//   refs.addWached = document.querySelector('.btn-add-wached');
//   if (storage.watchedList.includes(filmId)) {
//     refs.addWached.textContent = 'film in wached List';
//   }
//   if (storage.queuedList.includes(filmId)) {
//     refs.addToQueue.textContent = 'film in queue List';
//   }
//   openModal();
// }
// async function uppendModalMarkap(markup) {
//   refs.backdrop.innerHTML = markup;
// }

// function onCloseEsc(e) {
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// }

// function onBtnAddToQueueClick(e) {
//   console.log(refs);
//   if (e.target.dataset.action === 'add-queue') {
//     const filmId = e.currentTarget.getAttribute('id');
//     storage.addInQueuedList(filmId);
//     console.log(localStorage.getItem('queuedList'));
//   }
// }
// function onBtnAddWachedClick(e) {
//   console.log(refs);
//   if (e.target.dataset.action === 'add-wached') {
//     const filmId = e.currentTarget.getAttribute('id');
//     storage.addInWatchedList(filmId);
//     console.log(localStorage.getItem('watchedList'));
//   }
// }
// function onBtnCloseModalClick(e) {
//   if (
//     e.target.dataset.action === 'close-modal' ||
//     e.currentTarget === e.target
//   ) {
//     closeModal();
//   }
// }

// function openModal() {
//   refs.backdrop.classList.remove('visually-hidden');
//   document.addEventListener('keydown', onCloseEsc);
//   refs.backdrop.addEventListener('click', onBtnCloseModalClick);
//   refs.backdrop.addEventListener('click', onBtnAddToQueueClick);
//   refs.backdrop.addEventListener('click', onBtnAddWachedClick);
// }

// function closeModal() {
//   refs.backdrop.classList.add('visually-hidden');
//   document.removeEventListener('keydown', onCloseEsc);
//   refs.backdrop.removeEventListener('click', onBtnCloseModalClick);
//   refs.backdrop.removeEventListener('click', onBtnAddToQueueClick);
//   refs.backdrop.removeEventListener('click', onBtnAddWachedClick);
// }
