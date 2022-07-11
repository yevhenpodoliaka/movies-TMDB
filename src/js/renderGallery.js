import ApiService from './utils/api-servise';
import createMarkupList from './templates/markup-list';
import initPagination from './utils/initPanigation';
import markupPagination from './templates/markup-pagination';
import galleryHandlers from './handler/galleryHandlers';
export { apiService };
const apiService = new ApiService();

export default async function renderGallery() {
  const galleryEl = document.querySelector('.gallery');
  const galleryOptionsEl = document.querySelector('.gallery__option');
  const data = await apiService.fetchTrending();
  const markup = await createMarkupList(data.results);
  galleryEl.innerHTML = markup;
  galleryOptionsEl.innerHTML = markupPagination(data.page, data.total_pages);
  initPagination(data.page);
  galleryHandlers();
}
