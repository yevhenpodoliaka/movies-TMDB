export { onBtnPlayClick };

function onBtnPlayClick(e) {
  const modalImgEl = document.querySelector('.modal__img');
  const videoFrameEl = document.querySelector('.video-frame');
  const btnplayEl = document.querySelector('.modal__btn-play');
  if (e.target.classList.contains('modal__btn-play')) {
    modalImgEl.classList.toggle('visually-hidden');
    videoFrameEl.classList.toggle('visually-hidden');
    btnplayEl.classList.toggle('visually-hidden');
    console.log('on btn player click');
  }
}
