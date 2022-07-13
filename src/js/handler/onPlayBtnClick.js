import trailerMarkup from '../templates/markup-trailer';
import ApiService from '../utils/api-servise';
export { onBtnPlayClick };

const api = new ApiService();

function onBtnPlayClick(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalEl = document.querySelector('.modal');
  const modalCardEl = document.querySelector('.modal__card');

  if (e.target.classList.contains('modal__btn-play')) {
    const key = e.target.getAttribute('id');
    const markup = trailerMarkup(key);
    modalEl.insertAdjacentHTML('afterbegin', markup);
    modalCardEl.classList.add('is-hidden');
    const modalVideoEl = document.querySelector('.modal__video');
    modalVideoEl.classList.remove('is-hidden');
    modalEl.style.backgroundColor = 'transparent';
    backdropEl.addEventListener('click', onBtnCloseTrailer);
  }
}
function onBtnCloseTrailer(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalVideoEl = document.querySelector('.modal__video');
  const modalCardEl = document.querySelector('.modal__card');
  const modalEl = document.querySelector('.modal');
  if (e.target.classList.contains('modal__btn-close-trailer')) {
    modalVideoEl.remove();
    modalVideoEl.classList.add('is-hidden');
    modalCardEl.classList.remove('is-hidden');
    modalEl.style.backgroundColor = 'white';
    backdropEl.removeEventListener('click', onBtnCloseTrailer);
  }
}
