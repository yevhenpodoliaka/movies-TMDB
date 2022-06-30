const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
import Storage from './local-storage';
const storage = new Storage();

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

export default createMarkupList;
