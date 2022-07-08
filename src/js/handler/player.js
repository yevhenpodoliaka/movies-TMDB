export { onBtnPlayClick };

function onBtnPlayClick(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalImgEl = document.querySelector('.modal__img');
  const videoFrameEl = document.querySelector('.video-frame');
  const btnPlayEl = document.querySelector('.modal__btn-play');
  const btnCloseTrailer = document.querySelector('.modal__btn-close-trailer');
  if (e.target.classList.contains('modal__btn-play')) {
    modalImgEl.classList.toggle('visually-hidden');
    videoFrameEl.classList.toggle('visually-hidden');
    btnPlayEl.classList.toggle('visually-hidden');
    btnCloseTrailer.classList.toggle('visually-hidden');
    backdropEl.removeEventListener('click', onBtnPlayClick);
    backdropEl.addEventListener('click', onBtnCloseTrailer);
    console.log('on btn player click');
  }
}

function onBtnCloseTrailer(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalImgEl = document.querySelector('.modal__img');
  const videoFrameEl = document.querySelector('.video-frame');
  const btnPlayEl = document.querySelector('.modal__btn-play');
  const btnCloseTrailer = document.querySelector('.modal__btn-close-trailer');
  if (e.target.classList.contains('modal__btn-close-trailer')) {
    modalImgEl.classList.toggle('visually-hidden');
    videoFrameEl.classList.toggle('visually-hidden');
    btnPlayEl.classList.toggle('visually-hidden');
    btnCloseTrailer.classList.toggle('visually-hidden');
    backdropEl.removeEventListener('click', onBtnCloseTrailer);
    backdropEl.addEventListener('click', onBtnPlayClick);
    console.log('on btn player click');
  }
}
