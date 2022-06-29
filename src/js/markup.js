const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
import Storage from './local-storage';
const storage = new Storage();
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
function createMarkupCard({
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
  return `<div class="card" id=${id}>
    <button class="close-modal" data-action="close-modal">&#10006;</button>
    <div class="img-wrap">
      <img class="card__img" src=${IMG_URL}${poster_path} alt="cinema" />
    </div>
    <div class="description-wrap">
      <h2 class="card__title">${title}</h2>

      <div class="card__info">
        <div class="info-key">
          <p>Vote/votes</p>
          <p>Popularity</p>
          <p>Original Title</p>
          <p>Genre</p>
        </div>
        <div class="info-value">
          <p><span>${vote_average}</span>/<span>${vote_count}</span></p>
          <p>${popularity}</p>
          <p>${original_title}</p>
          <p>geners</p>
        </div>
      </div>
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

// function createMarkupCard({ id, backdrop_path, budget, genres, homepage }) {
//   return `<div class="card" id=${id}>
//   <button data-action="close-modal">close</button>
//   <button data-action="add-queue">Add to queue</button>
//   <button data-action="add-wached">Add Wached</button>
//   <img src=${IMG_URL}${backdrop_path} alt="">

// </div>`;
// }

function createMarkupList(arr) {
  return arr
    .map(
      ({
        id,
        title,
        poster_path,
        release_date,
        vote_average,
      }) => `<li class="gallery__item" id="${id}">
      <div class="info-wrap">
    <img src= ${IMG_URL}${poster_path} alt="" class="poster">
    <p class="title">${title}</p>
    <p class="date">Date: ${release_date}</p>
    <p class="rating">Rating :${vote_average}</p>
    </div>
</li>`
    )
    .join('');
}

export { createMarkupCard, createMarkupList };
