function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequireb382;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequireb382=o),o.register("kyEFX",(function(e,n){var a,o;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.37460258.js","3f3Gn":"cinema.9bc895e8.jpg"}'));var i={gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination"),paginationBtn:document.querySelectorAll(".pangination__btn"),paginationLastPage:document.querySelector(".last-page"),decrementBtn:document.querySelector(".prev-btn"),incrementBtn:document.querySelector(".next-btn"),homeBtn:document.querySelector(".header__btn-home"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),addToQueue:null,addWached:null};var r=class{addInWatchedList(t){this.watchedList.push(t),localStorage.setItem("watchedList",JSON.stringify(this.watchedList))}addInQueuedList(t){this.queuedList.push(t),localStorage.setItem("queuedList",JSON.stringify(this.queuedList))}constructor(){var t,e;this.watchedList=null!==(t=JSON.parse(localStorage.getItem("watchedList")))&&void 0!==t?t:[],this.queuedList=null!==(e=JSON.parse(localStorage.getItem("queuedList")))&&void 0!==e?e:[]}};new r;var s=function(t){return t.map((({id:t,title:e,poster_path:n,release_date:a,vote_average:o})=>`<li class="gallery__item" id="${t}">\n      <div class="info-wrap">\n    <img src= https://image.tmdb.org/t/p/w500/${n} alt="" class="poster">\n    <p class="title">${e}</p>\n    <p class="date">Date: ${a}</p>\n    <p class="rating">Rating :${o}</p>\n    </div>\n</li>`)).join("")};var c=class{async fetchByUrl(){const t=await fetch(this.url+`&page=${this.currentPage}`),e=await t.json();return this.totalPage=e.total_pages,console.log(this.currentPage),console.log(this.totalPage),e.results}async fetchByWord(t){this.url=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&query=${t}`;const e=await fetch(this.url+`&page=${this.currentPage}`),n=await e.json();return this.totalPage=n.total_pages,console.log(this.currentPage),console.log(this.totalPage),n.results}incrementPage(){this.currentPage+=1}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}async fetchById(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=b6201d5209ec246f483ea16253167a90`);return await e.json()}constructor(){this.homeUrl="https://api.themoviedb.org/3/trending/all/day?api_key=b6201d5209ec246f483ea16253167a90",this.url="https://api.themoviedb.org/3/trending/all/day?api_key=b6201d5209ec246f483ea16253167a90",this.currentPage=1,this.currentId=null,this.totalPage=null}};new URL(o("kyEFX").resolve("3f3Gn"),import.meta.url).toString();const d=new c,l=new r;function u(t){"Escape"===t.code&&h()}function g(t){if(console.log(i),"add-queue"===t.target.dataset.action){const e=t.currentTarget.getAttribute("id");l.addInQueuedList(e),console.log(localStorage.getItem("queuedList"))}}function p(t){if(console.log(i),"add-wached"===t.target.dataset.action){const e=t.currentTarget.getAttribute("id");l.addInWatchedList(e),console.log(localStorage.getItem("watchedList"))}}function m(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||h()}function h(){i.backdrop.classList.add("visually-hidden"),document.removeEventListener("keydown",u),i.backdrop.removeEventListener("click",m),i.backdrop.removeEventListener("click",g),i.backdrop.removeEventListener("click",p)}var f=async function(t){i.backdrop.setAttribute("id",t);const e=await d.fetchById(t),n=await function({poster_path:t,budget:e,genres:n=[],homepage:a,vote_count:o,vote_average:i,original_title:r,popularity:s,title:c,overview:d}){const l=n.map((t=>t.name));return console.log(l),`<div class="modal">\n    <button class="modal__close" data-action="close-modal">&#10006;</button>\n \n      <img class="modal__img" src=https://image.tmdb.org/t/p/w500/${t} alt="cinema" />\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${c}</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value"><span class="modal__info-value--accent">${i}</span>/<span     class="modal__info-key--accent">${o}</span></td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">${s}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">${r}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">${l}</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${d}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n  </div>`}(e);await async function(t){i.backdrop.innerHTML=t}(n),i.addToQueue=document.querySelector(".btn-add-queue"),i.addWached=document.querySelector(".btn-add-wached"),l.watchedList.includes(t)&&(i.addWached.textContent="film in wached List"),l.queuedList.includes(t)&&(i.addToQueue.textContent="film in queue List"),i.backdrop.classList.remove("visually-hidden"),document.addEventListener("keydown",u),i.backdrop.addEventListener("click",m),i.backdrop.addEventListener("click",g),i.backdrop.addEventListener("click",p)};let v=1;function b(){v>=7?i.decrementBtn.classList.remove("visually-hidden"):i.decrementBtn.classList.add("visually-hidden"),v>994?i.incrementBtn.classList.add("visually-hidden"):i.incrementBtn.classList.remove("visually-hidden"),i.paginationBtn.forEach((t=>{Number(t.textContent)===v?t.classList.add("current-page"):t.classList.remove("current-page")}))}i.pagination.addEventListener("click",(function(t){t.target.classList.contains("pangination__btn")&&(_.currentPage=Number(t.target.textContent),v=Number(t.target.textContent),b(),y(),window.scroll({top:0,behavior:"smooth"}))})),i.pagination.addEventListener("click",(function(t){t.target.classList.contains("next-btn")&&(v+=6,_.currentPage=v,i.paginationBtn.forEach((t=>{t.textContent=Number(t.textContent)+6})),y(),window.scroll({top:0,behavior:"smooth"}),b())})),i.pagination.addEventListener("click",(function(t){t.target.classList.contains("prev-btn")&&(v-=6,_.currentPage=v,i.paginationBtn.forEach((t=>{t.textContent=Number(t.textContent)-6})),y(),window.scroll({top:0,behavior:"smooth"}),b())})),i.paginationLastPage.textContent=1e3,window.addEventListener("DOMContentLoaded",y),i.homeBtn.addEventListener("click",(function(){_.currentPage=1,_.url=_.homeUrl,y()})),i.form.addEventListener("submit",(async function(t){t.preventDefault(),_.currentPage=1;const e=t.target.elements.input.value,n=await _.fetchByWord(e);if(0===n.length)return void alert("Search result not successful. Enter the correct movie name and ");const a=await s(n);return await w(a)})),i.gallery.addEventListener("click",(async function(t){const e=t.target.getAttribute("id");t.target.classList.contains("gallery__item")&&await f(e)}));const _=new c;async function y(){const t=await _.fetchByUrl(),e=await s(t);return await w(e)}function w(t){i.gallery.innerHTML=t}
//# sourceMappingURL=index.37460258.js.map