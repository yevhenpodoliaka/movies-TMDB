export { onBtnHomeClick };
import renderGallery from '../renderGallery';

function onBtnHomeClick() {
  const inputEl = document.querySelector('.form__input');
  inputEl.setAttribute('placeholder', 'search');
  renderGallery();
}
