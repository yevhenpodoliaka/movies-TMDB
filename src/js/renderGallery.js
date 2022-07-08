import ApiService from './utils/api-servise';
import createMarkupList from './templates/markup-list';
import renderPagination from './render-pagination';
import initPagination from './utils/initPanigation';
import paginationHandlers from './handler/paginationHandlers';
export { apiService };
const apiService = new ApiService();

export default async function renderGallery() {
  const galleryEl = document.querySelector('.gallery');
  const data = await apiService.fetchTrending();
  const markup = await createMarkupList(data.results);
  galleryEl.innerHTML = markup;
  console.log(data);
  renderPagination(data.page, data.total_pages);
  initPagination(data.page);
  paginationHandlers();
}
