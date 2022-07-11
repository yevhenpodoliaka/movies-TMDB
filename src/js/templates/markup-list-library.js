import defaultImg from '../../images/cinema.jpg';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function createMarkupList(arr) {
  return arr
    .map(({ id, title, poster_path, release_date, vote_average }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : `${defaultImg}`;
      return `<li class="gallery__item" data-id="${id}">
      <div class="info-wrap">
    <img src= ${poster} alt="" class="poster">
    <p class="title">${title}</p>
    <p class="date">Date: ${release_date}</p>
    <p class="rating">Rating :${vote_average}</p>
    </div>
</li>`;
    })
    .join('');
}

export default createMarkupList;
