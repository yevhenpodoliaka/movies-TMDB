var t={gallery:document.querySelector("#gallery"),libary:document.querySelector("#libary"),homeBtn:document.querySelector("#homeBtn"),libaryBtn:document.querySelector("#libaryBtn"),form:document.querySelector("#form"),errorInfo:document.querySelector("#errorInfo"),libaryOptions:document.querySelector("#libaryOptions"),decrementBtn:document.querySelector("#decrementBtn"),incrementBtn:document.querySelector("#incrementBtn"),backdrop:document.querySelector(".backdrop"),addToQueue:null,addWached:null};var e=class{addInWatchedList(t){this.watchedList.push(t),localStorage.setItem("watchedList",JSON.stringify(this.watchedList))}addInQueuedList(t){this.queuedList.push(t),localStorage.setItem("queuedList",JSON.stringify(this.queuedList))}constructor(){var t,e;this.watchedList=null!==(t=JSON.parse(localStorage.getItem("watchedList")))&&void 0!==t?t:[],this.queuedList=null!==(e=JSON.parse(localStorage.getItem("queuedList")))&&void 0!==e?e:[]}};new e;var a=function(t){return t.map((({id:t,title:e,poster_path:a,release_date:n,vote_average:i})=>`<li class="gallery__item" id="${t}">\n      <div class="info-wrap">\n    <img src= https://image.tmdb.org/t/p/w500/${a} alt="" class="poster">\n    <p class="title">${e}</p>\n    <p class="date">Date: ${n}</p>\n    <p class="rating">Rating :${i}</p>\n    </div>\n</li>`)).join("")};const n=new e;function i(t){"Escape"===t.code&&c()}function o(e){if(console.log(t),"add-queue"===e.target.dataset.action){const t=e.currentTarget.getAttribute("id");n.addInQueuedList(t),console.log(localStorage.getItem("queuedList"))}}function s(e){if(console.log(t),"add-wached"===e.target.dataset.action){const t=e.currentTarget.getAttribute("id");n.addInWatchedList(t),console.log(localStorage.getItem("watchedList"))}}function r(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||c()}function c(){t.backdrop.classList.add("visually-hidden"),document.removeEventListener("keydown",i),t.backdrop.removeEventListener("click",r),t.backdrop.removeEventListener("click",o),t.backdrop.removeEventListener("click",s)}console.log(n);var d=async function(e){t.backdrop.setAttribute("id",e);const a=await async function(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=b6201d5209ec246f483ea16253167a90`);return await e.json()}(e),c=await function({poster_path:t,budget:e,genres:a,homepage:n,vote_count:i,vote_average:o,original_title:s,popularity:r,title:c,overview:d}){return`<div class="modal">\n    <button class="modal__close" data-action="close-modal">&#10006;</button>\n \n      <img class="modal__img" src=https://image.tmdb.org/t/p/w500/${t} alt="cinema" />\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${c}</h2>\n      <table class="moal__info">\n  <tr>\n    <td>Vote/votes</td>\n    <td><span>${o}</span>/<span>${i}</span></td>\n  </tr>\n  <tr>\n    <td>Popularity</td>\n    <td>${r}</td>\n  </tr>\n  <tr>\n    <td>Original Title</td>\n    <td>${s}</td>\n  </tr>\n  <tr>\n    <td>Genre</td>\n    <td>geners</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${d}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n  </div>`}(a);await async function(e){t.backdrop.innerHTML=e}(c),t.addToQueue=document.querySelector(".btn-add-queue"),t.addWached=document.querySelector(".btn-add-wached"),n.watchedList.includes(e)&&(t.addWached.textContent="film in wached List"),n.queuedList.includes(e)&&(t.addToQueue.textContent="film in queue List"),t.backdrop.classList.remove("visually-hidden"),document.addEventListener("keydown",i),t.backdrop.addEventListener("click",r),t.backdrop.addEventListener("click",o),t.backdrop.addEventListener("click",s)};var l=class{async fetchPopular(){this.url="https://api.themoviedb.org/3/discover/movie?api_key=b6201d5209ec246f483ea16253167a90&sort_by=popularity.desc",console.log(this);const t=await fetch(this.url+`&page=${this.currentPage}`);return(await t.json()).results}async fetchByWord(t){this.url=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&query=${t}`,console.log(this);const e=await fetch(this.url+`&page=${this.currentPage}`);return(await e.json()).results}async fetchByUrl(){const t=await fetch(this.url+`&page=${this.currentPage}`);return(await t.json()).results}incrementPage(){this.currentPage+=1,console.log(this)}decrementPage(){this.currentPage>1&&(this.currentPage-=1,console.log(this))}constructor(){this.url=null,this.currentPage=1}};async function u(){const t=await h.fetchPopular(),e=await a(t);return await p(e)}window.addEventListener("DOMContentLoaded",u),t.homeBtn.addEventListener("click",(function(){t.form.classList.remove("visually-hidden"),t.libaryOptions.classList.add("visually-hidden"),t.gallery.classList.remove("visually-hidden"),t.libary.classList.add("visually-hidden"),u()})),t.libaryBtn.addEventListener("click",(function(){t.form.classList.add("visually-hidden"),t.libaryOptions.classList.remove("visually-hidden"),t.gallery.classList.add("visually-hidden"),t.libary.classList.remove("visually-hidden")})),t.form.addEventListener("submit",(async function(e){e.preventDefault(),h.currentPage=1;const n=e.target.elements.input.value,i=await h.fetchByWord(n);if(console.log(i),0===i.length)return void(t.errorInfo.textContent="Search result not successful. Enter the correct movie name and ");const o=await a(i);return await p(o)})),t.decrementBtn.addEventListener("click",(async function(){await h.decrementPage(),await g(),window.scroll({top:0,behavior:"smooth"})})),t.incrementBtn.addEventListener("click",(async function(){await h.incrementPage(),await g(),window.scroll({top:1,behavior:"smooth"})})),t.gallery.addEventListener("click",(async function(e){const a=e.target.getAttribute("id");e.target.classList.contains("gallery__item")&&await d(a);m.watchedList.includes(a),await console.log(t)}));const h=new l,m=new e;async function g(){const t=await h.fetchByUrl(),e=await a(t);return await p(e)}function p(e){t.gallery.innerHTML=e}
//# sourceMappingURL=index.b1836afa.js.map
