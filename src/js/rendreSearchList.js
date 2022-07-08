import createMarkupList from './templates/markup-list';
import { searchApi } from './handler/searchFormHandler';
import markupPagination from './templates/markup-pagination';
import initPagination from './utils/initPanigation';
import searchListHandlers from './handler/searchListHandlers';

export default async function renderSearchList() {
  const galleryEl = document.querySelector('.gallery');
  const galleryOption = (document.querySelector('.gallery__option').innerHTML =
    '');
  const searchlistOptions = document.querySelector('.search-list__option');
  const data = await searchApi.fetchSearchMovie();
  if (data.results.length === 0) {
    alert('Search result not successful. Enter the correct movie name and ');
    return;
  }
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
  searchlistOptions.innerHTML = markupPagination(data.page, data.total_pages);
  initPagination(data.page);
  searchListHandlers();
}
function uppendMarkapGalleryList(string) {
  const galleryEl = (document.querySelector('.gallery').innerHTML = string);
}
