import { searchApi } from './searchFormHandler';
import renderSearchList from '../rendreSearchList';
import initPagination from '../utils/initPanigation';
export default function searchListHandlers() {
  const searchlistOptions = document.querySelector('.search-list__option');

  searchlistOptions.addEventListener('click', onPaginationBtnClick);
  searchlistOptions.addEventListener('click', onNextPageClick);
  searchlistOptions.addEventListener('click', onPrevPageClick);
  searchlistOptions.addEventListener('click', onLastBtnClick);
}

function onLastBtnClick(e) {
  if (e.target.classList.contains('last-page')) {
    console.log(searchApi);
    searchApi.page = +e.target.textContent;
    renderSearchList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(searchApi.page);
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-page')) {
    console.log(searchApi);
    searchApi.page += 3;
    renderSearchList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(searchApi.page);
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-page')) {
    searchApi.page -= 3;
    console.log(searchApi);
    renderSearchList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(searchApi.page);
  }
}

function onPaginationBtnClick(e) {
  if (e.target.classList.contains('pagination__btn')) {
    searchApi.page = +e.target.textContent;
    console.log(searchApi);
    renderSearchList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    initPagination(e.target.textContent);
  }
}
