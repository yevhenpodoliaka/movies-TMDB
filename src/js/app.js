import startMarkup from './templates/startMarkup';
import renderGallery from './renderGallery';
import ApiService from './utils/api-servise';
import onCardClick from './handler/modalCardHandler';

const api = new ApiService();

const containerEl = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', appInit);
function appInit() {
  containerEl.innerHTML = startMarkup();
  renderGallery();
  const galleryList = document
    .querySelector('.gallery')
    .addEventListener('click', onCardClick);
    console.log(document.body.clientHeight);
    console.log(window.innerHeight);
}
