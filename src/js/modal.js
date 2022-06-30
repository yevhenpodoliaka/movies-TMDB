import Storage from './local-storage';
import refs from './refs';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=b6201d5209ec246f483ea16253167a90';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const storage = new Storage();

async function fetchById(movieId) {
  const response = await fetch(BASE_URL + `movie/${movieId}` + API_KEY);
  const data = await response.json();
  return data;
}

async function uppendModalMarkap(markup) {
  refs.backdrop.innerHTML = markup;
}

async function renderModal(filmId) {
  const data = await fetchById(filmId);
  const markup = await createModalMarkup(data);
  await uppendModalMarkap(markup);
  openModal();
}

function createModalMarkup({
  id,
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
  return `<div class="modal" id=${id}>
    <button class="close-modal" data-action="close-modal">&#10006;</button>
    <div class="img-wrap">
      <img class="card__img" src=${IMG_URL}${poster_path} alt="cinema" />
    </div>
    <div class="description-wrap">
      <h2 class="card__title">${title}</h2>
      <table class="card__info">
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
    
      <h3>About</h3>
      <p class="card__about">
        ${overview}
      </p>
      <div class="card__option">
        <button data-action="add-wached">add to Watched</button>
        <button data-action="add-queue">add to queue</button>
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
  if (e.target.dataset.action === 'add-queue') {
    storage.addInQueuedList(search.currentId);
    console.log(localStorage.getItem('queuedList'));
  }
}
function onBtnAddWachedClick(e) {
  if (e.target.dataset.action === 'add-wached') {
    storage.addInWatchedList(search.currentId);
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
