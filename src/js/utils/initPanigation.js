export default function initPagination(currentPage, totalPage) {
  const paginationBtns = document.querySelectorAll('.pagination__btn');
  console.log(paginationBtns);
  paginationBtns.forEach(element => {
    console.log(element.textContent);
    if (currentPage === Number(element.textContent)) {
      element.classList.add('current-page');
    }
  });
}
