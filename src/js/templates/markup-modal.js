const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
function createModalMarkup({
  poster_path,
  videos,
  genres = [],
  homepage,
  vote_count,
  vote_average,
  original_title,
  popularity,
  title,
  overview,
}) {
  const videoKey = videos.results[0].key;
  const genersList = genres.map(element => element.name);
  console.log(genersList);
  return `<div class="modal">
    <button class="modal__close" data-action="close-modal">&#10006;</button>
 <img class="modal__img" src=${IMG_URL}${poster_path} alt="cinema" />
    
    <div class="modal__description-wrap">
      <h2 class="modal__title">${title}</h2>
      <table class="modal__info">
  <tr>
    <td class="modal__info-key">Vote/votes</td>
    <td "modal__info-value"><span class="modal__info-value--accent">${vote_average}</span>/<span     class="modal__info-key--accent">${vote_count}</span></td>
  </tr>
  <tr>
    <td class="modal__info-key">Popularity</td>
    <td "modal__info-value">${popularity}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Original Title</td>
    <td "modal__info-value">${original_title}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Genre</td>
    <td "modal__info-value">${genersList}</td>
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
export default createModalMarkup;

{
  /* <div class="video">
  <button class="modal__btn-play">play</button>
  <iframe
    class="modal__iframe
  src="
    https:title="YouTube video player" //www.youtube.com/embed/${videoKey}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  ;
</div>; */
}
