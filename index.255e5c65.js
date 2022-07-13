function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=n.parcelRequireb382;null==i&&((i=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},n.parcelRequireb382=i),i.register("kyEFX",(function(e,n){var o,a;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var i={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},a=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.255e5c65.js","3f3Gn":"cinema.9bc895e8.jpg","lp5u4":"sprite.823233f3.svg"}'));class s{fetchGenres(t){return fetch(`https://api.themoviedb.org/3/genre/${t}/list?api_key=b6201d5209ec246f483ea16253167a90&language=uk-UA`).then((t=>t.json()))}async fetchTrending(){const t=`https://api.themoviedb.org/3/trending/movie/day?api_key=b6201d5209ec246f483ea16253167a90&language=uk-UA&page=${this.page}`;return(await fetch(t)).json()}async fetchSearchMovie(){const t=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&language=uk-UA&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return(await fetch(t)).json()}async fetchMovieDetails(t){const e=`https://api.themoviedb.org/3/movie/${t}?api_key=b6201d5209ec246f483ea16253167a90&language=uk-UA`,n=await fetch(e);return await n.json()}async searchTrailerById(t){const e=`https://api.themoviedb.org/3/movie/${t}/videos?api_key=b6201d5209ec246f483ea16253167a90&language=en-US`,n=await fetch(e);return(await n.json()).results.find((t=>t.name.includes("Official"))).key}async fetchMoviesListById(t){const e=await t.map((t=>this.fetchMovieDetails(t)));return await Promise.all(e)}incrementPage(){this.page+=1}set pageNumber(t){this.page=t}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get movieId(){return this.searchId}set movieId(t){this.searchId=t}constructor(){this.searchQuery="",this.page=1,this.searchId=""}}var r;r=new URL(i("kyEFX").resolve("3f3Gn"),import.meta.url).toString();var c=function(t){return t.map((({id:t,title:n,poster_path:o,release_date:a,vote_average:i})=>`<li class="gallery__item" data-id="${t}">\n      <div class="info-wrap">\n    <img src= ${o?`https://image.tmdb.org/t/p/w500/${o}`:`${e(r)}`} alt="" class="poster">\n    <p class="card__title">${n}</p>\n    <p class="card__date">${new Date(a).getFullYear()}</p>\n    <p class="card__rating">${i}</p>\n    </div>\n</li>`)).join("")};function l(t,e){document.querySelectorAll(".pagination__btn").forEach((e=>{t===Number(e.textContent)&&e.classList.add("current-page")}))}function u(t,e){if(e<=7){return[...new Array(e).keys()].map((t=>`<button class="pagination__btn">${t+1}</button>`))}return t<4&&e>7?`<button class="pagination__btn">1</button>\n  <button class="pagination__btn">2</button>\n  <button class="pagination__btn">3</button>\n  <button class="pagination__btn">4</button>\n  <button class="pagination__btn">5</button>\n  <button class="pagination__btn">6</button>\n  <button class="last-page">${e}</button>\n  <button class="next-page">&rarr;</button>`:t>=+e-5?` <button class="prev-page">&larr;</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">${+e-5}</button>\n<button class="pagination__btn">${+e-4}</button>\n<button class="pagination__btn">${+e-3}</button>\n<button class="pagination__btn">${+e-2}</button>\n<button class="pagination__btn">${+e-1}</button>\n<button class="pagination__btn">${+e}</button>`:t>3&&e>7&&t!==e?` <button class="prev-page">&larr;</button>\n  <button class="pagination__btn">1</button>\n  <button class="pagination__btn">${+t-2}</button>\n  <button class="pagination__btn">${+t-1}</button>\n  <button class="pagination__btn">${+t}</button>\n  <button class="pagination__btn">${+t+1}</button>\n  <button class="pagination__btn">${+t+2}</button>\n  <button class="last-page">${e}</button>\n  <button class="next-page">&rarr;</button>`:t===e?` <button class="prev-page">&larr;</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">${+e-5}</button>\n<button class="pagination__btn">${+e-4}</button>\n<button class="pagination__btn">${+e-3}</button>\n<button class="pagination__btn">${+e-2}</button>\n<button class="pagination__btn">${+e-1}</button>\n<button class="pagination__btn">${+e}</button>`:void 0}function d(){const t=document.querySelector(".gallery__option");t.addEventListener("click",m),t.addEventListener("click",p),t.addEventListener("click",v),t.addEventListener("click",g)}function g(t){t.target.classList.contains("last-page")&&(_.page=+t.target.textContent,h(),window.scroll({top:0,behavior:"smooth"}),l(_.page))}function p(t){t.target.classList.contains("next-page")&&(_.page+=3,h(),window.scroll({top:0,behavior:"smooth"}),l(_.page))}function v(t){t.target.classList.contains("prev-page")&&(_.page-=3,console.log(_.page),h(),window.scroll({top:0,behavior:"smooth"}),l(_.page))}function m(t){t.target.classList.contains("pagination__btn")&&(_.page=+t.target.textContent,console.log(_.page),h(),window.scroll({top:0,behavior:"smooth"}),l(t.target.textContent))}const _=new s;async function h(){const t=document.querySelector(".gallery"),e=document.querySelector(".gallery__option"),n=await _.fetchTrending(),o=await c(n.results);t.innerHTML=o,e.innerHTML=u(n.page,n.total_pages),l(n.page),d()}var b;b=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();var y=function({poster_path:t,genres:n=[],vote_count:o,vote_average:a,original_title:i,popularity:s,title:c,overview:l}){0===l.length&&(l+="Sorry, there is no description for this movie.");const u=n.map((t=>t.name)).join(", "),d=t?`https://image.tmdb.org/t/p/w500/${t}`:`${e(r)}`,g=l.slice(0,1e3);return`<div class="modal">\n        <div class="modal__card">\n         <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">\n        <use href="${e(b)}#icon-close"></use>\n      </svg></button>\n        <div class="modal__content">\n\n    <button class="modal__btn-play is-hidden"><svg class="modal__play-icon">\n        <use href="${e(b)}#icon-youtube"></use>\n      </svg></button>\n    <img class="modal__img" src="${d}" alt="cinema" />\n  </div>\n\n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${c}</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">${a}</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">${o}</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">${s}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">${i}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">${u}</td>\n  </tr>\n</table>\n\n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${g}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-watched" data-action="add-watched">додати до переглянутих</button>\n        <button class="btn-add-queue" data-action="add-queue">додати до черги</button>\n      </div>\n    </div>\n    </div>\n  </div>`};function f(t){const n=document.querySelector(".backdrop"),o=document.querySelector(".modal"),a=document.querySelector(".modal__card");if(t.target.classList.contains("modal__btn-play")){const s=t.target.getAttribute("id"),r=(i=s,`<div\n  class ="modal__video is-hidden">\n     <button  class="modal__btn-close-trailer"><svg class="modal__close-icon" width="14" height="14">\n        <use href="${e(b)}#icon-close"></use>\n      </svg></button>\n    <iframe class="video-frame" src="https://www.youtube.com/embed/${i}"\n    frameborder = '0';\n    title = 'YouTube video player';\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen></iframe></div>`);o.insertAdjacentHTML("afterbegin",r),a.classList.add("is-hidden");document.querySelector(".modal__video").classList.remove("is-hidden"),o.style.backgroundColor="transparent",n.addEventListener("click",w),document.addEventListener("keydown",S)}var i}function L(){document.querySelector(".modal__video").remove();const t=document.querySelector(".modal__card");document.querySelector(".modal").style.backgroundColor="white",t.classList.remove("is-hidden");document.querySelector(".backdrop").removeEventListener("click",w),document.removeEventListener("keydown",S)}function w(t){(t.target.classList.contains("modal__btn-close-trailer")||t.currentTarget===t.target)&&L()}function S(t){const e=document.querySelector(".modal__card");"Escape"===t.code&&e.classList.contains("is-hidden")&&L()}const q={getWatchedList(){try{return JSON.parse(localStorage.getItem("watched-list"))}catch(t){console.log(t)}},setWatchedList(t){localStorage.setItem("watched-list",JSON.stringify(t))},getQueueList(){try{return JSON.parse(localStorage.getItem("queue-list"))}catch(t){console.log(t)}},setQueueList(t){localStorage.setItem("queue-list",JSON.stringify(t))},isWatchedListEmpty(){const t=this.getWatchedList();return!t||0===t.length},isQueueListEmpty(){const t=this.getQueueList();return!t||0===t.length},isMovieInWatchedList(t){if(this.isWatchedListEmpty())return!1;return!!this.getWatchedList().includes(t)},isMovieInQueueList(t){if(this.isQueueListEmpty())return!1;return!!this.getQueueList().includes(t)},addMovieToWatchedList(t){if(this.isWatchedListEmpty())localStorage.setItem("watched-list",JSON.stringify([t]));else{const e=this.getWatchedList();e.push(t),this.setWatchedList(e)}},addMovieToQueueList(t){if(this.isQueueListEmpty())localStorage.setItem("queue-list",JSON.stringify([t]));else{const e=this.getQueueList();e.push(t),this.setQueueList(e)}},removeMovieFromWatchedList(t){const e=this.getWatchedList().filter((e=>e!==t));this.setWatchedList(e)},removeMovieFromQueueList(t){const e=this.getQueueList().filter((e=>e!==t));this.setQueueList(e)},clearWatchedList(){localStorage.removeItem("watched-list")},clearQueueList(){localStorage.removeItem("queue-list")}};function k(t){if("add-queue"===t.target.dataset.action){const e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-watched"),o=t.currentTarget.getAttribute("id");if(!q.isMovieInQueueList(o)&&!q.isMovieInWatchedList(o))return q.addMovieToQueueList(o),e.classList.toggle("isActive"),void(e.textContent="видалити з черги");if(q.isMovieInQueueList(o))return q.removeMovieFromQueueList(o),e.classList.toggle("isActive"),void(e.textContent="додати до черги");if(q.isMovieInWatchedList(o))return q.removeMovieFromWatchedList(o),n.classList.toggle("isActive"),n.textContent="додати до переглянутих",q.addMovieToQueueList(o),e.classList.toggle("isActive"),void(e.textContent="видалити з черги")}}function E(t){if("add-watched"===t.target.dataset.action){const e=document.querySelector(".btn-add-watched"),n=document.querySelector(".btn-add-queue"),o=t.currentTarget.getAttribute("id");if(!q.isMovieInWatchedList(o)&&!q.isMovieInQueueList(o))return q.addMovieToWatchedList(o),e.classList.toggle("isActive"),void(e.textContent="видалити з переглянутих");if(q.isMovieInWatchedList(o))return q.removeMovieFromWatchedList(o),e.classList.toggle("isActive"),void(e.textContent="додати до переглянутих");if(q.isMovieInQueueList(o))return q.removeMovieFromQueueList(o),n.classList.toggle("isActive"),n.textContent="додати до черги",q.addMovieToWatchedList(o),e.classList.toggle("isActive"),void(e.textContent="видалити з переглянутих")}}function $(){const t=document.querySelector(".backdrop");t.classList.remove("visually-hidden"),document.addEventListener("keydown",Q),t.addEventListener("click",I),t.addEventListener("click",k),t.addEventListener("click",E),t.addEventListener("click",f),document.body.addEventListener("wheel",x,{passive:!1})}function M(){const t=document.querySelector(".backdrop");t.classList.add("visually-hidden"),document.removeEventListener("keydown",Q),t.removeEventListener("click",I),t.removeEventListener("click",k),t.removeEventListener("click",E),t.removeEventListener("click",f),document.body.removeEventListener("wheel",x,{passive:!1})}function Q(t){const e=document.querySelector(".modal__card");"Escape"!==t.code||e.classList.contains("is-hidden")||M()}function I(t){const e=document.querySelector(".modal__card");"close-modal"!==t.target.dataset.action||e.classList.contains("is-hidden")||M(),t.currentTarget!==t.target||e.classList.contains("is-hidden")||M()}function x(t){return t.preventDefault(),t.stopPropagation(),!1}const W=new s;async function A(t){document.querySelector(".backdrop").setAttribute("id",t);try{const e=await W.fetchMovieDetails(t),n=await y(e);await function(t){document.querySelector(".backdrop").innerHTML=t}(n)}catch(t){console.log(t)}const e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-watched");q.isMovieInQueueList(t)&&(e.textContent="видалити з черги",e.classList.toggle("isActive")),q.isMovieInWatchedList(t)&&(n.textContent="видалити з переглянутих",n.classList.toggle("isActive")),await async function(t){const e=document.querySelector(".modal__btn-play");try{const n=await W.searchTrailerById(t);e.setAttribute("id",n),e.classList.remove("is-hidden")}catch(t){console.log(t)}}(t),$()}async function T(t){let e=document.querySelector(".backdrop");if(e=document.querySelector(".backdrop"),t.target.classList.contains("gallery__item")){const e=t.target.dataset.id;await A(e)}}function C(){const t=document.querySelector(".search-list__option");t.addEventListener("click",j),t.addEventListener("click",F),t.addEventListener("click",O),t.addEventListener("click",H)}function H(t){t.target.classList.contains("last-page")&&(console.log(D),D.page=+t.target.textContent,N(),window.scroll({top:0,behavior:"smooth"}),l(D.page))}function F(t){t.target.classList.contains("next-page")&&(console.log(D),D.page+=3,N(),window.scroll({top:0,behavior:"smooth"}),l(D.page))}function O(t){t.target.classList.contains("prev-page")&&(D.page-=3,console.log(D),N(),window.scroll({top:0,behavior:"smooth"}),l(D.page))}function j(t){t.target.classList.contains("pagination__btn")&&(D.page=+t.target.textContent,console.log(D),N(),window.scroll({top:0,behavior:"smooth"}),l(t.target.textContent))}async function N(){document.querySelector(".gallery"),document.querySelector(".gallery__option").innerHTML="";const t=document.querySelector(".search-list__option"),e=await D.fetchSearchMovie();if(0===e.results.length)return void alert("Search result not successful. Enter the correct movie name and ");const n=await c(e.results);var o;await(o=n,void(document.querySelector(".gallery").innerHTML=o)),t.innerHTML=u(e.page,e.total_pages),l(e.page),C()}const D=new s;async function R(t){const e=document.querySelector(".form__input");t.preventDefault(),D.searchQuery=t.target.elements.input.value,D.resetPage(),N(),t.target.elements.input.value="",e.setAttribute("placeholder",D.searchQuery)}const U=new s;async function P(){const t=q.getWatchedList();if(!t)return void alert("add movies from Watched list");const e=await U.fetchMoviesListById(t);return J(await c(e))}function J(t){document.querySelector(".gallery").innerHTML=t}async function B(){const t=q.getQueueList();if(!t)return void alert("add movies from Queue list");const e=await U.fetchMoviesListById(t);return J(await c(e))}function G(t){const e=document.querySelector(".library__options-watched"),n=document.querySelector(".library__options-queue");if(t.target.classList.contains("library__options-watched")){if(!q.getWatchedList())return void alert("add movies from Watched list");P(),n.classList.remove("current-page"),e.classList.add("current-page")}}function X(t){const e=document.querySelector(".library__options-watched"),n=document.querySelector(".library__options-queue");if(t.target.classList.contains("library__options-queue")){if(!q.getQueueList())return void alert("add movies from Queue list");B(),e.classList.remove("current-page"),n.classList.add("current-page")}}function Y(){document.querySelector(".form").classList.remove("visually-hidden");document.querySelector(".library__options").classList.add("visually-hidden");document.querySelector(".pagination").classList.remove("visually-hidden");document.querySelector(".form__input").setAttribute("placeholder","search");document.querySelector(".search-list__option").innerHTML="";h()}function V(){const t=document.querySelector(".form"),e=document.querySelector(".library__options"),n=document.querySelector(".pagination"),o=document.querySelector(".library__options-watched"),a=document.querySelector(".library__options-queue");if(q.getQueueList()||q.getWatchedList())return q.getWatchedList()?(t.classList.add("visually-hidden"),e.classList.remove("visually-hidden"),e.addEventListener("click",G),e.addEventListener("click",X),n.classList.add("visually-hidden"),P(),void o.classList.add("current-page")):q.getQueueList()?(t.classList.add("visually-hidden"),e.classList.remove("visually-hidden"),e.addEventListener("click",G),e.addEventListener("click",X),n.classList.add("visually-hidden"),B(),void a.classList.add("current-page")):void 0;alert("add movies from Watched list or Queue list")}new s;const Z=document.querySelector(".container");window.addEventListener("DOMContentLoaded",(function(){Z.innerHTML='<header class="header">\n  <nav class="header__nav">\n    <button class="header__btn-home" type="button">Домашня сторінка</button>\n    <button class="header__btn-library" type="button">Моя бібліотека</button>\n  </nav>\n  <form class="form">\n    <input class="form__input" type="text" name="input" placeholder="search" />\n  </form>\n  <div class="library__options visually-hidden">\n    <button class="library__options-watched">Переглянуті</button>\n    <button class="library__options-queue">На майбутнє</button>\n  </div>\n</header>\n<main>\n  <ul class="gallery"></ul>\n  <div class="gallery__option pagination"></div>\n  <div class="search-list__option pagination"></div>\n\n \n</main>\n<footer>\n  <span>© 2022 | All Rights Reserved |</span>\n</footer>\n<div class="backdrop visually-hidden"></div>',h();document.querySelector(".gallery").addEventListener("click",T),document.querySelector(".form").addEventListener("submit",R),document.querySelector(".header__btn-home").addEventListener("click",Y),document.querySelector(".header__btn-library").addEventListener("click",V)}));
//# sourceMappingURL=index.255e5c65.js.map
