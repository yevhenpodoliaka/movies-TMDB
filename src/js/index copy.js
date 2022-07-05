const refs = {
  pagination: document.querySelector("#root"),
};

function createMarkupPagination(currentPage, totalPage) {
  if (totalPage === currentPage) {
    return ` <button class="prev-btn visually-hidden"  data-number="${
      totalPage - 7
    }">prew list</button>
      <button class="pangination__btn">${totalPage - 6}</button>
      <button class="pangination__btn ">${totalPage - 5}</button>
      <button class="pangination__btn" >${totalPage - 4}</button>
      <button class="pangination__btn ">${totalPage - 3}</button>
      <button class="pangination__btn ">${totalPage - 2}</button>
      <button class="pangination__btn ">${totalPage - 1}</button>
   `;
  }
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

function initPagination(currentPage, totalPage) {
  console.log(currentPage);
  currentPage >= 7
    ? refs.decrementBtn.classList.remove("visually-hidden")
    : refs.decrementBtn.classList.add("visually-hidden");

  currentPage > totalPage - 6
    ? refs.incrementBtn.classList.add("visually-hidden")
    : refs.incrementBtn.classList.remove("visually-hidden");

  refs.paginationBtn.forEach((e) => {
    Number(e.textContent) === currentPage
      ? e.classList.add("current-page")
      : e.classList.remove("current-page");
  });
}
function showPagination(currentPage, totalPage) {
  const string = createMarkupPagination(currentPage, totalPage);
  renderPagination(string);

  refs.paginationBtn = document.querySelectorAll(".pangination__btn");
  refs.decrementBtn = document.querySelector(".prev-btn");
  refs.incrementBtn = document.querySelector(".next-btn");
  refs.paginationLastPage = document.querySelector(".last-page");

  refs.pagination.addEventListener("click", onPaginationBtnClick);
  refs.pagination.addEventListener("click", onNextPageClick);
  refs.pagination.addEventListener("click", onPrevPageClick);
  refs.pagination.addEventListener("click", onLastBtnClick);
  initPagination(currentPage, totalPage);
}
function renderPagination(string) {
  refs.pagination.innerHTML = string;
}
export { showPagination };
// ###############################################

// #####################################################################

function onLastBtnClick(e) {
  if (e.target.classList.contains("last-page")) {
    let page = e.target.textContent;

    showPagination(page, page);
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains("next-btn")) {
    let nextPage = 0;
    refs.paginationBtn.forEach((element) => {
      element.textContent = Number(element.textContent) + 6;
      if (element.classList.contains("current-page")) {
        nextPage = Number(element.textContent);
      }

      initPagination(nextPage);
    });
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains("prev-btn")) {
    let nextPage = 0;
    refs.paginationBtn.forEach((element) => {
      element.textContent = Number(element.textContent) - 6;
      if (element.classList.contains("current-page")) {
        nextPage = Number(element.textContent);
      }

      console.log(nextPage);
      initPagination(nextPage);
    });
  }
}

function onPaginationBtnClick(e) {
  if (e.target.classList.contains("pangination__btn")) {
    initPagination(Number(e.target.textContent));
  }
}
showPagination(1, 153);
