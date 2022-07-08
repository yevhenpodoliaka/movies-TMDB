export default function markupPagination(currentPage, totalPage) {
  if (currentPage < 4 && totalPage > 7) {
    return `<button class="pagination__btn">1</button>
  <button class="pagination__btn">2</button>
  <button class="pagination__btn">3</button>
  <button class="pagination__btn">4</button>
  <button class="pagination__btn">5</button>
  <button class="pagination__btn">6</button>
  <button class="last-page">${totalPage}</button>
  <button class="next-page">&rarr;</button>`;
  }
  if (currentPage >= +totalPage - 5) {
    return ` <button class="prev-page">&larr;</button>
<button class="pagination__btn">1</button>
<button class="pagination__btn">${+totalPage - 5}</button>
<button class="pagination__btn">${+totalPage - 4}</button>
<button class="pagination__btn">${+totalPage - 3}</button>
<button class="pagination__btn">${+totalPage - 2}</button>
<button class="pagination__btn">${+totalPage - 1}</button>
<button class="pagination__btn">${+totalPage}</button>`;
  }
  if (currentPage > 3 && totalPage > 7 && currentPage !== totalPage) {
    return ` <button class="prev-page">&larr;</button>
  <button class="pagination__btn">1</button>
  <button class="pagination__btn">${+currentPage - 2}</button>
  <button class="pagination__btn">${+currentPage - 1}</button>
  <button class="pagination__btn">${+currentPage}</button>
  <button class="pagination__btn">${+currentPage + 1}</button>
  <button class="pagination__btn">${+currentPage + 2}</button>
  <button class="last-page">${totalPage}</button>
  <button class="next-page">&rarr;</button>`;
  }
  if (currentPage === totalPage) {
    return ` <button class="prev-page">&larr;</button>
<button class="pagination__btn">1</button>
<button class="pagination__btn">${+totalPage - 5}</button>
<button class="pagination__btn">${+totalPage - 4}</button>
<button class="pagination__btn">${+totalPage - 3}</button>
<button class="pagination__btn">${+totalPage - 2}</button>
<button class="pagination__btn">${+totalPage - 1}</button>
<button class="pagination__btn">${+totalPage}</button>`;
  }
}
