import startMarkup from './templates/startMarkup';
import renderGallery from './renderGallery';
import ApiService from './utils/api-servise';
import onCardClick from './handler/modalCardHandler';
import onFormSubmit from './handler/searchFormHandler';
import { onBtnHomeClick, onBtnLibraryClick } from './handler/headerHandler';
const api = new ApiService();

const containerEl = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', appInit);
function appInit() {
  containerEl.innerHTML = startMarkup();
  renderGallery();
  const galleryList = document
    .querySelector('.gallery')
    .addEventListener('click', onCardClick);
  const searchFormEl = document
    .querySelector('.form')
    .addEventListener('submit', onFormSubmit);
  const btnHomeEl = document
    .querySelector('.header__btn-home')
    .addEventListener('click', onBtnHomeClick);
  const btnLibraryEl = document
    .querySelector('.header__btn-library')
    .addEventListener('click', onBtnLibraryClick);
}
