import markupPagination from './templates/markup-pagination';
export default function renderPagination(currentPage, totalPage) {
  const paginationEl = document.querySelector('.pagination');
  console.log(paginationEl);
  paginationEl.innerHTML = markupPagination(currentPage, totalPage);
}
