export default function startMarkup() {
  return `<header class="header">
  <nav class="header__nav">
    <button class="header__btn-home" type="button">Home</button>
    <button class="header__btn-library" type="button">My Library</button>
  </nav>
  <form class="form">
    <input class="form__input" type="text" name="input" placeholder="search" />
  </form>
  <div class="library__options visually-hidden">
    <button class="library__options-watched">Watched</button>
    <button class="library__options-queue">Queue</button>
  </div>
</header>
<main>
  <ul class="gallery"></ul>
  <ul class="library visually-hidden"></ul>

  <div class="gallery__option">
    <div class="pagination"></div>
  </div>
</main>
<footer>
  <span>© 2022 | All Rights Reserved |</span>
</footer>
<div class="backdrop visually-hidden"></div>`;
}
