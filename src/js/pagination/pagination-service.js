import refs from '../refs';
import createMarkupPagination from './pagination-markup';

function showPagination(currentPage, totalPage) {
  const string = createMarkupPagination(currentPage, totalPage);
  refs.pagination.innerHTML = string;

  refs.paginationBtn = document.querySelectorAll('.pangination__btn');
  refs.decrementBtn = document.querySelector('.prev-btn');
  refs.incrementBtn = document.querySelector('.next-btn');
  refs.paginationLastPage = document.querySelector('.last-page');

  refs.pagination.addEventListener('click', onPaginationBtnClick);
  refs.pagination.addEventListener('click', onNextPageClick);
  refs.pagination.addEventListener('click', onPrevPageClick);
  refs.pagination.addEventListener('click', onLastBtnClick);
}
export { showPagination };
// ###############################################

// const getCurrentPage = () => {
//   const href = location.href;
//   const url = new URL(href);
//   console.log(url.searchParams);
//   const page = url.searchParams.get('page');

//   return parseInt(page) ?? 1;
// };

// const changeNavigation = event => {
//   if (event.target.nodeName === 'BUTTON') {
//     const href = location.href;
//     const url = new URL(href);
//     const currentPage = parseInt(event.target.innerText);

//     url.searchParams.set('page', currentPage);
//     history.pushState({}, '', url.toString());

//     // requestData(currentPage, limit).then(data => {
//     //   const totalPages = Math.ceil(data.total / limit);

//     //   renderContent(data.articles);
//     //   renderPagination(currentPage, totalPages);
//     // });
//   }
// };
// #####################################################################

function onLastBtnClick(e) {
  if (e.target.classList.contains('last-page')) {
    let page = e.target.textContent;
  }
}

function onNextPageClick(e) {
  if (e.target.classList.contains('next-btn')) {
    let nextPage = 0;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) + 6;
      if (element.classList.contains('current-page')) {
        nextPage = Number(element.textContent);
      }
    });
  }
}
function onPrevPageClick(e) {
  if (e.target.classList.contains('prev-btn')) {
    let nextPage = 0;
    refs.paginationBtn.forEach(element => {
      element.textContent = Number(element.textContent) - 6;
      if (element.classList.contains('current-page')) {
        nextPage = Number(element.textContent);
      }
    });
  }
}

function onPaginationBtnClick(e) {
  if (e.target.classList.contains('pangination__btn')) {
    console.log(e.target.textContent);
  }
}
