import createMarkupList from './templates/markup-list';
import { searchApi } from './handler/searchFormHandler';

export default async function renderSearchList() {
  const galleryEl = document.querySelector('.gallery');
  const data = await searchApi.fetchSearchMovie();
  if (data.results.length === 0) {
    alert('Search result not successful. Enter the correct movie name and ');
    return;
  }
  const markup = await createMarkupList(data.results);
  await uppendMarkapGalleryList(markup);
}
function uppendMarkapGalleryList(string) {
  const galleryEl = (document.querySelector('.gallery').innerHTML = string);
}
