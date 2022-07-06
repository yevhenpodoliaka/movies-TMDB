import refs from '../refs';
import createMarkupPagination from './markup-pagination';

function initPagination(currentPage, totalPage) {
  console.log(currentPage);
  currentPage >= 7
    ? refs.decrementBtn.classList.remove('visually-hidden')
    : refs.decrementBtn.classList.add('visually-hidden');

  currentPage > totalPage - 6
    ? refs.incrementBtn.classList.add('visually-hidden')
    : refs.incrementBtn.classList.remove('visually-hidden');

  refs.paginationBtn.forEach(e => {
    Number(e.textContent) === currentPage
      ? e.classList.add('current-page')
      : e.classList.remove('current-page');
  });
}
function showPagination(currentPage, totalPage) {
  const string = createMarkupPagination(currentPage, totalPage);
  renderPagination(string);

  refs.paginationBtn = document.querySelectorAll('.pangination__btn');
  refs.decrementBtn = document.querySelector('.prev-btn');
  refs.incrementBtn = document.querySelector('.next-btn');
  refs.paginationLastPage = document.querySelector('.last-page');

  refs.pagination.addEventListener('click', onPaginationBtnClick);
  refs.pagination.addEventListener('click', onNextPageClick);
  refs.pagination.addEventListener('click', onPrevPageClick);
  refs.pagination.addEventListener('click', onLastBtnClick);
  initPagination(currentPage, totalPage);
}
function renderPagination(string) {
  refs.pagination.innerHTML = string;
}
export { showPagination };
// ###############################################

// #####################################################################

function onLastBtnClick(e) {
  if (e.target.classList.contains('last-page')) {
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-btn')) {
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-btn')) {
  }
}

function onPaginationBtnClick(e) {
  if (e.target.classList.contains('pangination__btn')) {
    initPagination(Number(e.target.textContent));
  }
}
