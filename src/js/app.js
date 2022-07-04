import createMarkupList from './create-markup-list';
import renderModal from './modal';
import refs from './refs';
import Search from './api-servise';
// import './pagination-history';
import './pagination';
import pagination from './service-pagination';

window.addEventListener('DOMContentLoaded', renderList);
refs.homeBtn.addEventListener('click', onClickBtnHome);
refs.form.addEventListener('submit', onFormSubmit);

refs.gallery.addEventListener('click', onCardClick);

const search = new Search();
export { search };

function onClickBtnHome() {
  search.currentPage = 1;
  search.url = search.homeUrl;
  renderList();
}

async function renderList() {
  const data = await search.fetchByUrl();
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}
export { renderList };
async function onFormSubmit(e) {
  e.preventDefault();
  search.currentPage = 1;
  const query = e.target.elements.input.value;
  const data = await search.fetchByWord(query);

  if (data.length === 0) {
    alert('Search result not successful. Enter the correct movie name and ');
    return;
  }
  const markup = await createMarkupList(data);
  return await uppendMarkapGalleryList(markup);
}

function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}

// ------Modal----------------
async function onCardClick(e) {
  const filmId = e.target.getAttribute('id');
  if (e.target.classList.contains('gallery__item')) {
    await renderModal(filmId);
  }
}

// function onClickBtnHome() {
//   refs.form.classList.remove('visually-hidden');
//   refs.libaryOptions.classList.add('visually-hidden');
//   refs.gallery.classList.remove('visually-hidden');
//   refs.libary.classList.add('visually-hidden');
//   search.url = search.homeUrl;
//   renderList();
// }

// function onClickBtnLibary() {
//   refs.form.classList.add('visually-hidden');
//   refs.libaryOptions.classList.remove('visually-hidden');
//   refs.gallery.classList.add('visually-hidden');
//   refs.libary.classList.remove('visually-hidden');
// }
