import refs from './refs';
import { search } from './app';
import { renderList } from './app';

window.addEventListener('DOMContentLoaded', initPagination);

function initPagination() {
  refs.pagination.addEventListener('click', onPaginationBtnClick);
  refs.paginationLastPage.textContent = search.totalPage;
}

async function onPaginationBtnClick(e) {
  refs.paginationLastPage.textContent = search.totalPage;
  Number(search.currentPage) > 7
    ? refs.decrementBtn.classList.remove('visually-hidden')
    : refs.decrementBtn.classList.add('visually-hidden');

  // перелистування сторінки кнопок

  if (e.target.classList.contains('next-btn')) {
    search.currentPage += 6;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) + 6;
    });
    await renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (e.target.classList.contains('prew-btn')) {
    search.currentPage -= 6;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) - 6;
    });
    await renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (e.target.classList.contains('pangination__btn')) {
    search.currentPage = Number(e.target.textContent);
    await renderList();
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
