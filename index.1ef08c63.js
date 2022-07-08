class t{fetchGenres(t){return fetch(`https://api.themoviedb.org/3/genre/${t}/list?api_key=b6201d5209ec246f483ea16253167a90&language=en-US`).then((t=>t.json()))}async fetchTrending(){const t=`https://api.themoviedb.org/3/trending/movie/day?api_key=b6201d5209ec246f483ea16253167a90&page=${this.page}`;return(await fetch(t)).json()}async fetchSearchMovie(){const t=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return(await fetch(t)).json()}async fetchMovieDetails(t){const e=`https://api.themoviedb.org/3/movie/${t}?api_key=b6201d5209ec246f483ea16253167a90&language=en-US&append_to_response=videos`,n=await fetch(e),a=await n.json();return console.log(a.videos.results[0].key),console.log(a),a}incrementPage(){this.page+=1}set pageNumber(t){this.page=t}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get movieId(){return this.searchId}set movieId(t){this.searchId=t}constructor(){this.searchQuery="",this.page=1,this.searchId=""}}var e=function(t){return t.map((({id:t,title:e,poster_path:n,release_date:a,vote_average:o})=>`<li class="gallery__item" data-id="${t}">\n      <div class="info-wrap">\n    <img src= https://image.tmdb.org/t/p/w500/${n} alt="" class="poster">\n    <p class="title">${e}</p>\n    <p class="date">Date: ${a}</p>\n    <p class="rating">Rating :${o}</p>\n    </div>\n</li>`)).join("")};function n(t,e){return t<4&&e>7?`<button class="pagination__btn">1</button>\n  <button class="pagination__btn">2</button>\n  <button class="pagination__btn">3</button>\n  <button class="pagination__btn">4</button>\n  <button class="pagination__btn">5</button>\n  <button class="pagination__btn">6</button>\n  <button class="last-page">${e}</button>\n  <button class="next-page">next page</button>`:t>=+e-5?` <button class="prev-page">prev page</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">${+e-5}</button>\n<button class="pagination__btn">${+e-4}</button>\n<button class="pagination__btn">${+e-3}</button>\n<button class="pagination__btn">${+e-2}</button>\n<button class="pagination__btn">${+e-1}</button>\n<button class="pagination__btn">${+e}</button>`:t>3&&e>7&&t!==e?` <button class="prev-page">prev page</button>\n  <button class="pagination__btn">1</button>\n  <button class="pagination__btn">${+t-2}</button>\n  <button class="pagination__btn">${+t-1}</button>\n  <button class="pagination__btn">${+t}</button>\n  <button class="pagination__btn">${+t+1}</button>\n  <button class="pagination__btn">${+t+2}</button>\n  <button class="last-page">${e}</button>\n  <button class="next-page">next page</button>`:t===e?` <button class="prev-page">prev page</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">${+e-5}</button>\n<button class="pagination__btn">${+e-4}</button>\n<button class="pagination__btn">${+e-3}</button>\n<button class="pagination__btn">${+e-2}</button>\n<button class="pagination__btn">${+e-1}</button>\n<button class="pagination__btn">${+e}</button>`:void 0}function a(t,e){const a=document.querySelector(".pagination");console.log(a),a.innerHTML=n(t,e)}function o(t,e){const n=document.querySelectorAll(".pagination__btn");console.log(n),n.forEach((e=>{console.log(e.textContent),t===Number(e.textContent)&&e.classList.add("current-page")}))}function s(){const t=document.querySelector(".pagination");document.querySelector(".prev-page"),document.querySelector(".next-page"),document.querySelector(".last-page");t.addEventListener("click",r),t.addEventListener("click",c),t.addEventListener("click",l),t.addEventListener("click",i)}function i(t){t.target.classList.contains("last-page")&&(u.page=+t.target.textContent,d(),window.scroll({top:0,behavior:"smooth"}),o(u.page))}function c(t){t.target.classList.contains("next-page")&&(u.page+=3,d(),window.scroll({top:0,behavior:"smooth"}),o(u.page))}function l(t){t.target.classList.contains("prev-page")&&(u.page-=3,console.log(u.page),d(),window.scroll({top:0,behavior:"smooth"}),o(u.page))}function r(t){t.target.classList.contains("pagination__btn")&&(u.page=+t.target.textContent,console.log(u.page),d(),window.scroll({top:0,behavior:"smooth"}),o(t.target.textContent))}const u=new t;async function d(){const t=document.querySelector(".gallery"),n=await u.fetchTrending(),i=await e(n.results);t.innerHTML=i,console.log(n),a(n.page,n.total_pages),o(n.page),s()}var g=function({poster_path:t,videos:e,genres:n=[],vote_count:a,vote_average:o,original_title:s,popularity:i,title:c,overview:l}){const r=e.results[0].key,u=n.map((t=>t.name));return console.log(u),`<div class="modal">\n    <button class="modal__close" data-action="close-modal">&#10006;</button>\n        <div class="modal__card">\n        <div class="modal__content">\n        <button   class="modal__btn-close-trailer visually-hidden">&#10006;</button> \n    <iframe class="video-frame visually-hidden" src="https://www.youtube.com/embed/${r}"\n    frameborder = '0';\n    title = 'YouTube video player';\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen></iframe>\n    <button class="modal__btn-play">play</button>\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${t}" alt="cinema" />\n  </div>\n\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${c}</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">${o}</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">${a}</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">${i}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">${s}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">${u}</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${l}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n    </div>\n  </div>`};function b(t){const e=document.querySelector(".backdrop"),n=document.querySelector(".modal__img"),a=document.querySelector(".video-frame"),o=document.querySelector(".modal__btn-play"),s=document.querySelector(".modal__btn-close-trailer");t.target.classList.contains("modal__btn-play")&&(n.classList.toggle("visually-hidden"),a.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden"),s.classList.toggle("visually-hidden"),e.removeEventListener("click",b),e.addEventListener("click",p),console.log("on btn player click"))}function p(t){const e=document.querySelector(".backdrop"),n=document.querySelector(".modal__img"),a=document.querySelector(".video-frame"),o=document.querySelector(".modal__btn-play"),s=document.querySelector(".modal__btn-close-trailer");t.target.classList.contains("modal__btn-close-trailer")&&(n.classList.toggle("visually-hidden"),a.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden"),s.classList.toggle("visually-hidden"),e.removeEventListener("click",p),e.addEventListener("click",b),console.log("on btn player click"))}const m={getWatchedList(){try{return JSON.parse(localStorage.getItem("watched-list"))}catch(t){console.log(t)}},setWatchedList(t){localStorage.setItem("watched-list",JSON.stringify(t))},getQueueList(){try{return JSON.parse(localStorage.getItem("queue-list"))}catch(t){console.log(t)}},setQueueList(t){localStorage.setItem("queue-list",JSON.stringify(t))},isWatchedListEmpty(){const t=this.getWatchedList();return!t||0===t.length},isQueueListEmpty(){const t=this.getQueueList();return!t||0===t.length},isMovieInWatchedList(t){if(this.isWatchedListEmpty())return!1;return!!this.getWatchedList().includes(t)},isMovieInQueueList(t){if(this.isQueueListEmpty())return!1;return!!this.getQueueList().includes(t)},addMovieToWatchedList(t){if(this.isWatchedListEmpty())localStorage.setItem("watched-list",JSON.stringify([t]));else{const e=this.getWatchedList();e.push(t),this.setWatchedList(e)}},addMovieToQueueList(t){if(this.isQueueListEmpty())localStorage.setItem("queue-list",JSON.stringify([t]));else{const e=this.getQueueList();e.push(t),this.setQueueList(e)}},removeMovieFromWatchedList(t){const e=this.getWatchedList().filter((e=>e!==t));this.setWatchedList(e)},removeMovieFromQueueList(t){const e=this.getQueueList().filter((e=>e!==t));this.setQueueList(e)},clearWatchedList(){localStorage.removeItem("watched-list")},clearQueueList(){localStorage.removeItem("queue-list")}};function h(t){if("add-queue"===t.target.dataset.action){const e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-wached"),a=t.currentTarget.getAttribute("id");if(m.isMovieInQueueList(a)?m.removeMovieFromQueueList(a):m.addMovieToQueueList(a),e.classList.toggle("isActive"),m.isMovieInQueueList(a)?e.textContent="delete to queue":e.textContent="add to queue",console.log(m.getQueueList()),!e.disabled&&!n.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function _(t){if("add-wached"===t.target.dataset.action){const e=document.querySelector(".btn-add-wached"),n=document.querySelector(".btn-add-queue"),a=t.currentTarget.getAttribute("id");if(m.isMovieInWatchedList(a)?m.removeMovieFromWatchedList(a):m.addMovieToWatchedList(a),e.classList.toggle("isActive"),m.isMovieInWatchedList(a)?e.textContent="delete to wached":e.textContent="add to watched",console.log(m.getWatchedList()),!n.disabled&&!e.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function v(){let t=document.querySelector(".backdrop");t.classList.remove("visually-hidden"),document.addEventListener("keydown",L),t.addEventListener("click",f),t.addEventListener("click",h),t.addEventListener("click",_),t.addEventListener("click",b)}function y(){let t=document.querySelector(".backdrop");t.classList.add("visually-hidden"),document.removeEventListener("keydown",L),t.removeEventListener("click",f),t.removeEventListener("click",h),t.removeEventListener("click",_),t.removeEventListener("click",b)}function L(t){"Escape"===t.code&&y()}function f(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||y()}const S=new t;async function q(t){document.querySelector(".backdrop").setAttribute("id",t);try{const e=await S.fetchMovieDetails(t),n=await g(e);await async function(t){document.querySelector(".backdrop").innerHTML=t}(n),v()}catch(t){return alert("error"),void console.log(t)}const e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-wached");m.isMovieInQueueList(t)&&(e.textContent="delete to queue",e.classList.toggle("isActive"),n.disabled=!0),m.isMovieInWatchedList(t)&&(n.textContent="delete to Wached",n.classList.toggle("isActive"),e.disabled=!0)}async function w(t){let e=document.querySelector(".backdrop");if(e=document.querySelector(".backdrop"),t.target.classList.contains("gallery__item")){const e=t.target.dataset.id;await q(e)}}async function k(){document.querySelector(".gallery");const t=await $.fetchSearchMovie();if(0===t.results.length)return void alert("Search result not successful. Enter the correct movie name and ");const n=await e(t.results);var a;await(a=n,void(document.querySelector(".gallery").innerHTML=a))}const $=new t;async function E(t){const e=document.querySelector(".form__input");t.preventDefault(),$.searchQuery=t.target.elements.input.value,$.resetPage(),k(),t.target.elements.input.value="",e.setAttribute("placeholder",$.searchQuery)}function Q(){document.querySelector(".form__input").setAttribute("placeholder","search"),d()}new t;const M=document.querySelector(".container");window.addEventListener("DOMContentLoaded",(function(){M.innerHTML='<header class="header">\n  <nav class="header__nav">\n    <button class="header__btn-home" type="button">Home</button>\n    <button class="header__btn-library" type="button">My Library</button>\n  </nav>\n  <form class="form">\n    <input class="form__input" type="text" name="input" placeholder="search" />\n  </form>\n  <div class="library__options visually-hidden">\n    <button class="library__options-watched">Watched</button>\n    <button class="library__options-queue">Queue</button>\n  </div>\n</header>\n<main>\n  <ul class="gallery"></ul>\n  <ul class="library visually-hidden"></ul>\n\n  <div class="gallery__option">\n    <div class="pagination"></div>\n  </div>\n</main>\n<footer>\n  <span>© 2022 | All Rights Reserved |</span>\n</footer>\n<div class="backdrop visually-hidden"></div>',d();document.querySelector(".gallery").addEventListener("click",w);console.log(document.body.clientHeight),console.log(window.innerHeight);document.querySelector(".form").addEventListener("submit",E),document.querySelector(".header__btn-home").addEventListener("click",Q)}));
//# sourceMappingURL=index.1ef08c63.js.map