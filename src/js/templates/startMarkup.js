export default function startMarkup() {
  return `<header class="header">
  <nav class="header__nav">
    <button class="header__btn-home" type="button">Домашня сторінка</button>
    <button class="header__btn-library" type="button">Моя бібліотека</button>
  </nav>
  <form class="form">
    <input class="form__input" type="text" name="input" placeholder="search" />
  </form>
  <div class="library__options visually-hidden">
    <button class="library__options-watched">Переглянуті</button>
    <button class="library__options-queue">На майбутнє</button>
  </div>
</header>
<main>
  <ul class="gallery"></ul>
  <div class="gallery__option pagination"></div>
  <div class="search-list__option pagination"></div>

 
</main>
<footer>
  <span>© 2022 | All Rights Reserved |</span>
</footer>
<div class="backdrop visually-hidden"></div>`;
}
