import Storage from './local-storage';
import refs from './refs';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const storage = new Storage();

console.log(storage);
async function fetchById(movieId) {
  const response = await fetch(BASE_URL + `movie/${movieId}` + API_KEY);
  const data = await response.json();
  return data;
}

async function uppendModalMarkap(markup) {
  refs.backdrop.innerHTML = markup;
}

async function renderModal(filmId) {
  refs.backdrop.setAttribute('id', filmId);
  const data = await fetchById(filmId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  refs.addToQueue = document.querySelector('.btn-add-queue');
  refs.addWached = document.querySelector('.btn-add-wached');
  if (storage.watchedList.includes(filmId)) {
    refs.addWached.textContent = 'film in wached List';
  }
  if (storage.queuedList.includes(filmId)) {
    refs.addToQueue.textContent = 'film in queue List';
  }
  openModal();
}
function createModalMarkup({
  poster_path,
  budget,
  genres,
  homepage,
  vote_count,
  vote_average,
  original_title,
  popularity,
  title,
  overview,
}) {
  return `<div class="modal">
    <button class="modal__close" data-action="close-modal">&#10006;</button>
    <div class="modal__img-wrap">
      <img class="modal__img" src=${IMG_URL}${poster_path} alt="cinema" />
    </div>
    <div class="modal__description-wrap">
      <h2 class="modal__title">${title}</h2>
      <table class="moal__info">
  <tr>
    <td>Vote/votes</td>
    <td><span>${vote_average}</span>/<span>${vote_count}</span></td>
  </tr>
  <tr>
    <td>Popularity</td>
    <td>${popularity}</td>
  </tr>
  <tr>
    <td>Original Title</td>
    <td>${original_title}</td>
  </tr>
  <tr>
    <td>Genre</td>
    <td>geners</td>
  </tr>
</table>
    
      <h3 class="modal__about-title">About</h3>
      <p class="modal__about-text">
        ${overview}
      </p>
      <div class="modal__option">
        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>
        <button class="btn-add-queue" data-action="add-queue">add to queue</button>
      </div>
    </div>
  </div>`;
}
function onCloseEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBtnAddToQueueClick(e) {
  console.log(refs);
  if (e.target.dataset.action === 'add-queue') {
    const filmId = e.currentTarget.getAttribute('id');
    storage.addInQueuedList(filmId);
    console.log(localStorage.getItem('queuedList'));
  }
}
function onBtnAddWachedClick(e) {
  console.log(refs);
  if (e.target.dataset.action === 'add-wached') {
    const filmId = e.currentTarget.getAttribute('id');
    storage.addInWatchedList(filmId);
    console.log(localStorage.getItem('watchedList'));
  }
}
function onBtnCloseModalClick(e) {
  if (
    e.target.dataset.action === 'close-modal' ||
    e.currentTarget === e.target
  ) {
    closeModal();
  }
}
function closeModal() {
  refs.backdrop.classList.add('visually-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  refs.backdrop.removeEventListener('click', onBtnCloseModalClick);
  refs.backdrop.removeEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.removeEventListener('click', onBtnAddWachedClick);
}
function openModal() {
  refs.backdrop.classList.remove('visually-hidden');
  document.addEventListener('keydown', onCloseEsc);
  refs.backdrop.addEventListener('click', onBtnCloseModalClick);
  refs.backdrop.addEventListener('click', onBtnAddToQueueClick);
  refs.backdrop.addEventListener('click', onBtnAddWachedClick);
}
export default renderModal;
// backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg"
// belongs_to_collection: {id: 720879, name: "Sonic the Hedgehog Collection", poster_path: "/rEC1pkQ1UbX7USRkVIrt2Nk7hlC.jpg",…}
// budget: 110000000
// genres: [{id: 28, name: "Action"}, {id: 12, name: "Adventure"}, {id: 10751, name: "Family"},…]
// homepage: "https://www.sonicthehedgehogmovie.com"
// id: 675353
// imdb_id: "tt12412888"
// original_language: "en"
// original_title: "Sonic the Hedgehog 2"
// overview: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands."
// popularity: 3201.969
// poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
// production_companies: [{id: 4, logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png", name: "Paramount", origin_country: "US"},…]
// production_countries: [{iso_3166_1: "JP", name: "Japan"}, {iso_3166_1: "US", name: "United States of America"}]
// release_date: "2022-03-30"
// revenue: 393000000
// runtime: 122
// spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"}]
// status: "Released"
// tagline: "Welcome to the next level."
// title: "Sonic the Hedgehog 2"
// video: false
// vote_average: 7.7
// vote_count: 2274
