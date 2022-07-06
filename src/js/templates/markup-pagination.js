function createMarkupPagination(currentPage, totalPage) {
  // if (totalPage === currentPage) {
  //   return ` <button class="prev-btn visually-hidden"  data-number="${
  //     totalPage - 7
  //   }">prew list</button>
  //     <button class="pangination__btn">${totalPage - 6}</button>
  //     <button class="pangination__btn ">${totalPage - 5}</button>
  //     <button class="pangination__btn" >${totalPage - 4}</button>
  //     <button class="pangination__btn ">${totalPage - 3}</button>
  //     <button class="pangination__btn ">${totalPage - 2}</button>
  //     <button class="pangination__btn ">${totalPage - 1}</button>
  //  `;
  // }
  return ` <button class="prev-btn visually-hidden"  data-number="${
    currentPage - 6
  }">prew list</button>
      <button class="pangination__btn current-page">${currentPage}</button>
      <button class="pangination__btn ">${currentPage + 1}</button>
      <button class="pangination__btn" >${currentPage + 2}</button>
      <button class="pangination__btn ">${currentPage + 3}</button>
      <button class="pangination__btn ">${currentPage + 4}</button>
      <button class="pangination__btn ">${currentPage + 5}</button>
      <button class="last-page">${totalPage}</button>
      <button class="next-btn" data-number="${
        currentPage + 6
      }">next list</button>`;
}
export default createMarkupPagination;
