export default function initPagination(currentPage, totalPage) {
  const paginationBtns = document.querySelectorAll('.pagination__btn');
  paginationBtns.forEach(element => {
    if (currentPage === Number(element.textContent)) {
      element.classList.add('current-page');
    }
  });
}
