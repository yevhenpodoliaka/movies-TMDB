import renderModalCard from '../modalCardRender';

export default async function onCardClick(e) {
  let backdropEl = document.querySelector('.backdrop');
  backdropEl = document.querySelector('.backdrop');
  if (e.target.classList.contains('gallery__item')) {
    const filmId = e.target.dataset.id;
    await renderModalCard(filmId);
  }
}
