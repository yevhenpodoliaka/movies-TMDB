var e={gallery:document.querySelector("#gallery"),libary:document.querySelector("#libary"),homeBtn:document.querySelector("#homeBtn"),libaryBtn:document.querySelector("#libaryBtn"),form:document.querySelector("#form"),libaryOptions:document.querySelector("#libaryOptions"),decrementBtn:document.querySelector("#decrementBtn"),incrementBtn:document.querySelector("#incrementBtn"),backdrop:document.querySelector("#backdrop"),addToQueue:document.querySelector("#add-to-queue"),addWached:document.querySelector("#add-wached")};var t=class{addInWatchedList(e){this.watchedList.push(e),localStorage.setItem("watchedList",JSON.stringify(this.watchedList))}addInQueuedList(e){this.queuedList.push(e),localStorage.setItem("queuedList",JSON.stringify(this.queuedList))}constructor(){var e,t;this.watchedList=null!==(e=JSON.parse(localStorage.getItem("watchedList")))&&void 0!==e?e:[],this.queuedList=null!==(t=JSON.parse(localStorage.getItem("queuedList")))&&void 0!==t?t:[]}};new t;function a(e){return e.map((({id:e,title:t,poster_path:a,release_date:i,vote_average:n})=>`<li class="gallery__item" id="${e}">\n      <div class="info-wrap">\n    <img src= https://image.tmdb.org/t/p/w500/${a} alt="" class="poster">\n    <p class="title">${t}</p>\n    <p class="date">Date: ${i}</p>\n    <p class="rating">Rating :${n}</p>\n    </div>\n</li>`)).join("")}var i=class{async fetchPopular(){this.url="https://api.themoviedb.org/3/discover/movie?api_key=b6201d5209ec246f483ea16253167a90&sort_by=popularity.desc",console.log(this);const e=await fetch(this.url+`&page=${this.currentPage}`);return(await e.json()).results}async fetchByWord(e){this.url=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&query=${e}`,console.log(this);const t=await fetch(this.url+`&page=${this.currentPage}`);return(await t.json()).results}async fetchByUrl(){const e=await fetch(this.url+`&page=${this.currentPage}`);return(await e.json()).results}async fetchById(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=b6201d5209ec246f483ea16253167a90`);return await t.json()}incrementPage(){this.currentPage+=1,console.log(this)}decrementPage(){this.currentPage>1&&(this.currentPage-=1,console.log(this))}constructor(){this.url=null,this.currentPage=1,this.currentId=null}};async function n(){const e=await r.fetchPopular(),t=await a(e);return await o(t)}window.addEventListener("DOMContentLoaded",n),e.homeBtn.addEventListener("click",(function(){e.form.classList.remove("visually-hidden"),e.libaryOptions.classList.add("visually-hidden"),e.gallery.classList.remove("visually-hidden"),e.libary.classList.add("visually-hidden"),n()})),e.libaryBtn.addEventListener("click",(function(){e.form.classList.add("visually-hidden"),e.libaryOptions.classList.remove("visually-hidden"),e.gallery.classList.add("visually-hidden"),e.libary.classList.remove("visually-hidden")})),e.form.addEventListener("submit",(async function(e){e.preventDefault(),r.currentPage=1;const t=e.target.elements.input.value,i=await r.fetchByWord(t),n=await a(i);return await o(n)})),e.decrementBtn.addEventListener("click",(async function(){await r.decrementPage(),await s(),window.scroll({top:0,behavior:"smooth"})})),e.incrementBtn.addEventListener("click",(async function(){await r.incrementPage(),await s(),window.scroll({top:1,behavior:"smooth"})})),e.gallery.addEventListener("click",(async function(t){const a=t.target.getAttribute("id");if(r.currentId=a,t.target.classList.contains("gallery__item")){await r.fetchById(a);e.backdrop.classList.remove("visually-hidden")}c.watchedList.includes(a),console.log(e),await(document.addEventListener("keydown",h),e.backdrop.addEventListener("click",u),e.backdrop.addEventListener("click",d),void e.backdrop.addEventListener("click",l))}));const r=new i,c=new t;async function s(){const e=await r.fetchByUrl(),t=await a(e);return await o(t)}function o(t){e.gallery.innerHTML=t}function d(e){"add-queue"===e.target.dataset.action&&(c.addInQueuedList(r.currentId),console.log(localStorage.getItem("queuedList")))}function l(e){"add-wached"===e.target.dataset.action&&(c.addInWatchedList(r.currentId),console.log(localStorage.getItem("watchedList")))}function u(e){"close-modal"!==e.target.dataset.action&&e.currentTarget!==e.target||y()}function h(e){"Escape"===e.code&&y()}function y(){e.backdrop.classList.add("visually-hidden"),document.removeEventListener("keydown",h),e.backdrop.removeEventListener("click",u),e.backdrop.removeEventListener("click",d),e.backdrop.removeEventListener("click",l)}
//# sourceMappingURL=index.da0a763c.js.map
