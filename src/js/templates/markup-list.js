import defaultImg from '../../images/cinema.jpg';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function createMarkupList(arr) {
  return arr
    .map(({ id, title, poster_path, release_date, vote_average }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : `${defaultImg}`;
      const date = new Date(release_date).getFullYear();
      return `<li class="gallery__item" data-id="${id}">
      <div class="info-wrap">
    <img src= ${poster} alt="" class="poster">
    <p class="card__title">${title}</p>
    <p class="card__date">${date}</p>
    <p class="card__rating">${vote_average}</p>
    </div>
</li>`;
    })
    .join('');
}

export default createMarkupList;
