import ApiService from './utils/api-servise';
import createMarkupList from './templates/markup-list';
const apiService = new ApiService();

export default async function renderGallery() {
  const galleryEl = document.querySelector('.gallery');
  const data = await apiService.fetchTrending();
  const markup = await createMarkupList(data.results);
  galleryEl.innerHTML = markup;
  //   showPagination(data.page, data.total_pages);
}
