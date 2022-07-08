import renderSearchList from '../rendreSearchList';
import ApiService from '../utils/api-servise';
const searchApi = new ApiService();
export { searchApi };
export default async function onFormSubmit(e) {
  const inputEl = document.querySelector('.form__input');
  e.preventDefault();
  searchApi.searchQuery = e.target.elements.input.value;
  searchApi.resetPage();
  renderSearchList();
  e.target.elements.input.value = '';
  inputEl.setAttribute('placeholder', searchApi.searchQuery);
}
