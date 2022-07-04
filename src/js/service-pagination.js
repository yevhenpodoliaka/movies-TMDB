import refs from './refs';
// import { search } from './app';
const testRoot = document.querySelector('.test-root');

const pagination = {
  currentPage: 1,
  totalPage: 1000,
  step: null,
  quantity: 7,

  markup() {
    return ` <button class="prev-btn visually-hidden">prew list</button>
      <button class="pangination__btn ">${this.currentPage}</button>
      <button class="pangination__btn ">${this.currentPage + 1}</button>
      <button class="pangination__btn ">${this.currentPage + 2}</button>
      <button class="pangination__btn ">${this.currentPage + 3}</button>
      <button class="pangination__btn  btn-twenty">${
        this.currentPage + 19
      }</button>
      <button class="pangination__btn btn-hungret">${
        this.currentPage + 99
      }</button>
      <button class="last-page">${this.totalPage}</button>
      <button class="next-btn">next list</button>`;
  },

  init() {
    console.log(this.currentPage);
    console.log(this.quantity + 1);
    this.currentPage >= this.quantity + 1
      ? refs.decrementBtn.classList.remove('visually-hidden')
      : refs.decrementBtn.classList.add('visually-hidden');

    this.currentPage > this.totalPage - this.step + 1
      ? refs.incrementBtn.classList.add('visually-hidden')
      : refs.incrementBtn.classList.remove('visually-hidden');

    refs.paginationBtn.forEach(e => {
      Number(e.textContent) === this.currentPage
        ? e.classList.add('current-page')
        : e.classList.remove('current-page');
    });
  },

  render() {
    testRoot.innerHTML = pagination.markup();
  },
};

// function showPagination() {
//   pagination.markup();
//   pagination.render();
// }
// showPagination();
export default pagination;
