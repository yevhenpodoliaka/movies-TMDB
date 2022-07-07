export default function onBtnPlayClick(e) {
  const imgEl = document.querySelector('.modal__img');
  const iframeEL = document.querySelector('.modal__iframe');
  if (e.target.classList.contains('modal__btn-play')) {
    imgEl.style.opacity = 0;
    console.log('on btn player click');
  }
}
