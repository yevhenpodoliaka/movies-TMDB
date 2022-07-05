function createMarkupPagination(currentPage, totalPage) {
  return ` <button class="prev-btn visually-hidden">prew list</button>
      <button class="pangination__btn current-page">${currentPage}</button>
      <button class="pangination__btn ">${currentPage + 1}</button>
      <button class="pangination__btn" >${currentPage + 2}</button>
      <button class="pangination__btn ">${currentPage + 3}</button>
      <button class="pangination__btn ">${currentPage + 4}</button>
      <button class="pangination__btn ">${currentPage + 5}</button>
      <button class="last-page">${totalPage}</button>
      <button class="next-btn visually-hidden" data-number="
      ">next list</button>`;
}
export default createMarkupPagination;
