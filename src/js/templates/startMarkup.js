export default function startMarkup() {
  return `<header class="header">
  <nav class="header__nav">
    <button class="header__btn-home" type="button">Home</button>
    <button class="header__btn-libary" type="button">My Libary</button>
  </nav>
  <form class="form">
    <input type="text" name="input" placeholder="search" />
  </form>
  <div class="libary__options visually-hidden">
    <button class="libary__options-watched">Watched</button>
    <button class="libary__options-queue">Queue</button>
  </div>
</header>
<main>
  <ul class="gallery"></ul>

  <div class="gallery__option">
    <div class="pagination"></div>
  </div>
</main>
<footer>
  <span>© 2022 | All Rights Reserved |</span>
</footer>
<div class="backdrop visually-hidden"></div>`;
}