import refs from './refs';
import { search } from './app';
import { renderList } from './app';

refs.pagination.addEventListener('click', onPaginationBtnClick);
refs.pagination.addEventListener('click', onNextPageClick);
refs.pagination.addEventListener('click', onPrevPageClick);
// refs.pagination.addEventListener('click', onLastBtnClick);

// #####################################################################
// рендер при кліку стрілок браузера
window.onpopstate = () => {
  const page = getCurrentPage();
  search.currentPage = Number(page);
  renderList();
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

// достає номер сторінки з url
function getCurrentPage() {
  const href = location.href;
  const url = new URL(href);
  const page = url.searchParams.get('page');
  return page ?? 1;
}
// додає номер сторінки в url
function changeNavigation(currentPage) {
  const href = location.href;
  const url = new URL(href);
  url.searchParams.set('page', currentPage);
  history.pushState({}, '', url.toString());
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-btn')) {
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) + 6;
    });

    search.currentPage = Number(refs.paginationBtn[0].textContent);
    changeNavigation(search.currentPage);
    renderList();

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-btn')) {
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) - 6;
    });
    search.currentPage = Number(refs.paginationBtn[0].textContent);
    changeNavigation(search.currentPage);
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
    changeNavigation(Number(e.target.textContent));
    renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function createMarkupPagination(currentPage, totalPage) {
  return ` <button class="prev-btn visually-hidden">prew list</button>
      <button class="pangination__btn current-page">${currentPage}</button>
      <button class="pangination__btn ">${currentPage + 1}</button>
      <button class="pangination__btn ">${currentPage + 2}</button>
      <button class="pangination__btn ">${currentPage + 3}</button>
      <button class="pangination__btn ">${currentPage + 4}</button>
      <button class="pangination__btn ">${currentPage + 5}</button>
      <button class="last-page">${totalPage}</button>
      <button class="next-btn">next list</button>`;
}

function renderPagination(string) {
  refs.pagination.innerHTML = string;
}

function showPagination(currentPage, totalPage) {
  const string = createMarkupPagination(currentPage, totalPage);
  renderPagination(string);
  refs.paginationBtn = document.querySelectorAll('.pangination__btn');
  refs.decrementBtn = document.querySelector('.prev-btn');
  refs.incrementBtn = document.querySelector('.next-btn');
  refs.paginationLastPage = document.querySelector('.last-page');
  initPagination(currentPage);
}

export { showPagination };
2;

function initPagination(currentPage) {
  currentPage >= 7
    ? refs.decrementBtn.classList.remove('visually-hidden')
    : refs.decrementBtn.classList.add('visually-hidden');

  currentPage > 994
    ? refs.incrementBtn.classList.add('visually-hidden')
    : refs.incrementBtn.classList.remove('visually-hidden');

  refs.paginationBtn.forEach(e => {
    Number(e.textContent) === currentPage
      ? e.classList.add('current-page')
      : e.classList.remove('current-page');
  });
}
