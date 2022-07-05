import refs from './refs';
import createMarkupList from './create-markup-list';
import { api } from './app';
import { showPagination } from './panigation';
refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  api.searchQuery = e.target.elements.input.value;
  const data = await api.fetchSearchMovie();
  if (data.results.length === 0) {
    alert('Search result not successful. Enter the correct movie name and ');
    return;
  }
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
  showPagination(data.page, data.total_pages);
}
function uppendMarkapGalleryList(string) {
  refs.gallery.innerHTML = string;
}
