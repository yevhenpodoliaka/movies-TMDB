export { onBtnPlayClick, onBtnStopplayer };

function onBtnPlayClick(e) {
  const modalCardEl = document.querySelector('.modal__card');
  const videoWrapEl = document.querySelector('.video-wrap');
  if (e.target.classList.contains('modal__btn-play')) {
    modalCardEl.classList.toggle('visually-hidden');
    videoWrapEl.classList.toggle('visually-hidden');
    console.log('on btn player click');
  }
}
function onBtnStopplayer() {
  const modalCardEl = document.querySelector('.modal__card');
  const videoWrapEl = document.querySelector('.video-wrap');
  if (e.target.classList.contains('modal__btn-stop')) {
    videoWrapEl.classList.toggle('visually-hidden');
    modalCardEl.classList.toggle('visually-hidden');

    console.log('on btn stop click');
  }
}
