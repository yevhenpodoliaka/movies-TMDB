import { apiService } from '../renderGallery';
import renderGallery from '../renderGallery';
import initPagination from '../utils/initPanigation';
export default function galleryHandlers() {
  const galleryOptionsEl = document.querySelector('.gallery__option');
  galleryOptionsEl.addEventListener('click', onPaginationBtnClick);
  galleryOptionsEl.addEventListener('click', onNextPageClick);
  galleryOptionsEl.addEventListener('click', onPrevPageClick);
  galleryOptionsEl.addEventListener('click', onLastBtnClick);
}

function onLastBtnClick(e) {
  if (e.target.classList.contains('last-page')) {
    apiService.page = +e.target.textContent;
    renderGallery();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(apiService.page);
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-page')) {
    apiService.page += 3;
    renderGallery();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(apiService.page);
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-page')) {
    apiService.page -= 3;
    console.log(apiService.page);
    renderGallery();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(apiService.page);
  }
}

function onPaginationBtnClick(e) {
  if (e.target.classList.contains('pagination__btn')) {
    apiService.page = +e.target.textContent;
    console.log(apiService.page);
    renderGallery();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(e.target.textContent);
  }
}
