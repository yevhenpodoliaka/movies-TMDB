class e{fetchGenres(e){return fetch(`https://api.themoviedb.org/3/genre/${e}/list?api_key=b6201d5209ec246f483ea16253167a90&language=en-US`).then((e=>e.json()))}async fetchTrending(){const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=b6201d5209ec246f483ea16253167a90&page=${this.page}`;return(await fetch(e)).json()}async fetchSearchMovie(){const e=`https://api.themoviedb.org/3/search/movie?api_key=b6201d5209ec246f483ea16253167a90&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return(await fetch(e)).json()}async fetchMovieDetails(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b6201d5209ec246f483ea16253167a90&language=en-US&append_to_response=videos`,a=await fetch(t),n=await a.json();return console.log(n.videos.results[0].key),console.log(n),n}incrementPage(){this.page+=1}set pageNumber(e){this.page=e}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get movieId(){return this.searchId}set movieId(e){this.searchId=e}constructor(){this.searchQuery="",this.page=1,this.searchId=""}}const t=new e;async function a(){const e=document.querySelector(".gallery"),a=await t.fetchTrending(),n=await(s=a.results,s.map((({id:e,title:t,poster_path:a,release_date:n,vote_average:s})=>`<li class="gallery__item" data-id="${e}">\n      <div class="info-wrap">\n    <img src= https://image.tmdb.org/t/p/w500/${a} alt="" class="poster">\n    <p class="title">${t}</p>\n    <p class="date">Date: ${n}</p>\n    <p class="rating">Rating :${s}</p>\n    </div>\n</li>`)).join(""));var s;e.innerHTML=n}var n=function({poster_path:e,videos:t,genres:a=[],vote_count:n,vote_average:s,original_title:i,popularity:o,title:l,overview:c}){const d=t.results[0].key,r=a.map((e=>e.name));return console.log(r),`<div class="modal">\n    <button class="modal__close" data-action="close-modal">&#10006;</button>\n        <div class="modal__card">\n        <div class="modal__content">\n        <button   class="modal__btn-close-trailer visually-hidden">&#10006;</button> \n    <iframe class="video-frame visually-hidden" src="https://www.youtube.com/embed/${d}"\n    frameborder = '0';\n    title = 'YouTube video player';\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen></iframe>\n    <button class="modal__btn-play">play</button>\n    <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${e}" alt="cinema" />\n  </div>\n\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">${l}</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">${s}</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">${n}</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">${o}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">${i}</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">${r}</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ${c}\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n    </div>\n  </div>`};function s(e){const t=document.querySelector(".backdrop"),a=document.querySelector(".modal__img"),n=document.querySelector(".video-frame"),o=document.querySelector(".modal__btn-play"),l=document.querySelector(".modal__btn-close-trailer");e.target.classList.contains("modal__btn-play")&&(a.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden"),l.classList.toggle("visually-hidden"),t.removeEventListener("click",s),t.addEventListener("click",i),console.log("on btn player click"))}function i(e){const t=document.querySelector(".backdrop"),a=document.querySelector(".modal__img"),n=document.querySelector(".video-frame"),o=document.querySelector(".modal__btn-play"),l=document.querySelector(".modal__btn-close-trailer");e.target.classList.contains("modal__btn-close-trailer")&&(a.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden"),l.classList.toggle("visually-hidden"),t.removeEventListener("click",i),t.addEventListener("click",s),console.log("on btn player click"))}const o={getWatchedList(){try{return JSON.parse(localStorage.getItem("watched-list"))}catch(e){console.log(e)}},setWatchedList(e){localStorage.setItem("watched-list",JSON.stringify(e))},getQueueList(){try{return JSON.parse(localStorage.getItem("queue-list"))}catch(e){console.log(e)}},setQueueList(e){localStorage.setItem("queue-list",JSON.stringify(e))},isWatchedListEmpty(){const e=this.getWatchedList();return!e||0===e.length},isQueueListEmpty(){const e=this.getQueueList();return!e||0===e.length},isMovieInWatchedList(e){if(this.isWatchedListEmpty())return!1;return!!this.getWatchedList().includes(e)},isMovieInQueueList(e){if(this.isQueueListEmpty())return!1;return!!this.getQueueList().includes(e)},addMovieToWatchedList(e){if(this.isWatchedListEmpty())localStorage.setItem("watched-list",JSON.stringify([e]));else{const t=this.getWatchedList();t.push(e),this.setWatchedList(t)}},addMovieToQueueList(e){if(this.isQueueListEmpty())localStorage.setItem("queue-list",JSON.stringify([e]));else{const t=this.getQueueList();t.push(e),this.setQueueList(t)}},removeMovieFromWatchedList(e){const t=this.getWatchedList().filter((t=>t!==e));this.setWatchedList(t)},removeMovieFromQueueList(e){const t=this.getQueueList().filter((t=>t!==e));this.setQueueList(t)},clearWatchedList(){localStorage.removeItem("watched-list")},clearQueueList(){localStorage.removeItem("queue-list")}};function l(e){if("add-queue"===e.target.dataset.action){const t=document.querySelector(".btn-add-queue"),a=document.querySelector(".btn-add-wached"),n=e.currentTarget.getAttribute("id");if(o.isMovieInQueueList(n)?o.removeMovieFromQueueList(n):o.addMovieToQueueList(n),t.classList.toggle("isActive"),o.isMovieInQueueList(n)?t.textContent="delete to queue":t.textContent="add to queue",console.log(o.getQueueList()),!t.disabled&&!a.disabled)return a.disabled=!0;if(a.disabled)return a.disabled=!1}}function c(e){if("add-wached"===e.target.dataset.action){const t=document.querySelector(".btn-add-wached"),a=document.querySelector(".btn-add-queue"),n=e.currentTarget.getAttribute("id");if(o.isMovieInWatchedList(n)?o.removeMovieFromWatchedList(n):o.addMovieToWatchedList(n),t.classList.toggle("isActive"),o.isMovieInWatchedList(n)?t.textContent="delete to wached":t.textContent="add to watched",console.log(o.getWatchedList()),!a.disabled&&!t.disabled)return a.disabled=!0;if(a.disabled)return a.disabled=!1}}function d(){let e=document.querySelector(".backdrop");e.classList.remove("visually-hidden"),document.addEventListener("keydown",u),e.addEventListener("click",m),e.addEventListener("click",l),e.addEventListener("click",c),e.addEventListener("click",s)}function r(){let e=document.querySelector(".backdrop");e.classList.add("visually-hidden"),document.removeEventListener("keydown",u),e.removeEventListener("click",m),e.removeEventListener("click",l),e.removeEventListener("click",c),e.removeEventListener("click",s)}function u(e){"Escape"===e.code&&r()}function m(e){"close-modal"!==e.target.dataset.action&&e.currentTarget!==e.target||r()}const h=new e;async function g(e){document.querySelector(".backdrop").setAttribute("id",e);try{const t=await h.fetchMovieDetails(e),a=await n(t);await async function(e){document.querySelector(".backdrop").innerHTML=e}(a),d()}catch(e){return alert("error"),void console.log(e)}const t=document.querySelector(".btn-add-queue"),a=document.querySelector(".btn-add-wached");o.isMovieInQueueList(e)&&(t.textContent="delete to queue",t.classList.toggle("isActive"),a.disabled=!0),o.isMovieInWatchedList(e)&&(a.textContent="delete to Wached",a.classList.toggle("isActive"),t.disabled=!0)}async function v(e){let t=document.querySelector(".backdrop");if(t=document.querySelector(".backdrop"),e.target.classList.contains("gallery__item")){const t=e.target.dataset.id;await g(t)}}new e;const y=document.querySelector(".container");window.addEventListener("DOMContentLoaded",(function(){y.innerHTML='<header class="header">\n  <nav class="header__nav">\n    <button class="header__btn-home" type="button">Home</button>\n    <button class="header__btn-libary" type="button">My Libary</button>\n  </nav>\n  <form class="form">\n    <input type="text" name="input" placeholder="search" />\n  </form>\n  <div class="libary__options visually-hidden">\n    <button class="libary__options-watched">Watched</button>\n    <button class="libary__options-queue">Queue</button>\n  </div>\n</header>\n<main>\n  <ul class="gallery"></ul>\n\n  <div class="gallery__option">\n    <div class="pagination"></div>\n  </div>\n</main>\n<footer>\n  <span>© 2022 | All Rights Reserved |</span>\n</footer>\n<div class="backdrop visually-hidden"></div>',a();document.querySelector(".gallery").addEventListener("click",v);console.log(document.body.clientHeight),console.log(window.innerHeight)}));
//# sourceMappingURL=index.ac499faa.js.map
