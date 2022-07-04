import refs from './refs';
import { search } from './app';
import { renderList } from './app';

let current = 1;
let total = 1000;

refs.pagination.addEventListener('click', onPaginationBtnClick);
refs.pagination.addEventListener('click', onNextPageClick);
refs.pagination.addEventListener('click', onPrevPageClick);
refs.pagination.addEventListener('click', onLastBtnClick);
refs.paginationLastPage.textContent = total;

// показує/приховує кнопки: prevPage/nextPage
function initPagination() {
  current >= 7
    ? refs.decrementBtn.classList.remove('visually-hidden')
    : refs.decrementBtn.classList.add('visually-hidden');

  current > 994
    ? refs.incrementBtn.classList.add('visually-hidden')
    : refs.incrementBtn.classList.remove('visually-hidden');

  refs.paginationBtn.forEach(e => {
    Number(e.textContent) === current
      ? e.classList.add('current-page')
      : e.classList.remove('current-page');
  });
}

function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-btn')) {
    current -= 6;
    search.currentPage = current;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) - 6;
    });
    renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    initPagination();
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-btn')) {
    current += 6;
    search.currentPage = current;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) + 6;
    });

    renderList();

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    initPagination();
  }
}
function onLastBtnClick(e) {
  if (e.target.classList.contains('last-page')) {
    current = total;
    search.currentPage = current;
    let num = total - 7;
    refs.paginationBtn.forEach(element => {
      element.textContent = num += 1;
    });
    initPagination();
    renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
function onPaginationBtnClick(e) {
  if (e.target.classList.contains('pangination__btn')) {
    search.currentPage = Number(e.target.textContent);
    current = Number(e.target.textContent);
    initPagination();
    renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
