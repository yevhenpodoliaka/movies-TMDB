!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",v="completed",p={};function y(){}function g(){}function m(){}var b={};s(b,a,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(Q([])));L&&L!==n&&r.call(L,a)&&(b=L);var w=m.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function Q(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=m,s(w,"constructor",m),s(m,"constructor",g),g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),s(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=Q,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:Q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var i={};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,e,n){e&&c(t.prototype,e);n&&c(t,n);return t};var s="https://api.themoviedb.org/3",u="b6201d5209ec246f483ea16253167a90",l=function(){"use strict";function n(){t(a)(this,n),this.searchQuery="",this.page=1,this.searchId=""}return t(i)(n,[{key:"fetchGenres",value:function(t){var e="".concat(s,"/genre/").concat(t,"/list?api_key=").concat(u,"&language=en-US");return fetch(e).then((function(t){return t.json()}))}},{key:"fetchTrending",value:function(){var n=this;return t(e)(t(r).mark((function e(){var o,a,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(s,"/trending/all/day?api_key=").concat(u,"&page=").concat(n.page),t.next=3,fetch(o);case 3:return a=t.sent,i=a.json(),t.abrupt("return",i);case 6:case"end":return t.stop()}}),e)})))()}},{key:"fetchSearchMovie",value:function(){var n=this;return t(e)(t(r).mark((function e(){var o,a,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n.searchQuery,"&page=").concat(n.page,"&include_adult=false"),t.next=3,fetch(o);case 3:return a=t.sent,i=a.json(),t.abrupt("return",i);case 6:case"end":return t.stop()}}),e)})))()}},{key:"fetchMovieDetails",value:function(n){return t(e)(t(r).mark((function e(){var o,a,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(s,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US&append_to_response=videos"),t.next=3,fetch(o);case 3:return a=t.sent,t.next=6,a.json();case 6:return i=t.sent,console.log(i.videos.results[0].key),console.log(i),t.abrupt("return",i);case 10:case"end":return t.stop()}}),e)})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"pageNumber",set:function(t){this.page=t}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"movieId",get:function(){return this.searchId},set:function(t){this.searchId=t}}]),n}();var d=function(t){return t.map((function(t){var e=t.id,n=t.title,r=t.poster_path,o=t.release_date,a=t.vote_average;return'<li class="gallery__item" data-id="'.concat(e,'">\n      <div class="info-wrap">\n    <img src= ').concat("https://image.tmdb.org/t/p/w500/").concat(r,' alt="" class="poster">\n    <p class="title">').concat(n,'</p>\n    <p class="date">Date: ').concat(o,'</p>\n    <p class="rating">Rating :').concat(a,"</p>\n    </div>\n</li>")})).join("")},h=new l;function f(){return v.apply(this,arguments)}function v(){return(v=t(e)(t(r).mark((function e(){var n,o,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".gallery"),t.next=3,h.fetchTrending();case 3:return o=t.sent,t.next=6,d(o.results);case 6:a=t.sent,n.innerHTML=a;case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var p=function(t){var e=t.poster_path,n=t.videos,r=t.genres,o=void 0===r?[]:r,a=(t.homepage,t.vote_count),i=t.vote_average,c=t.original_title,s=t.popularity,u=t.title,l=t.overview,d=n.results[0].key,h=o.map((function(t){return t.name}));return console.log(h),'<div class="modal">\n  <button class="modal__close" data-action="close-modal">&#10006;</button>\n  <div class="modal__card">\n  <div class="modal__content">\n    <iframe class="video-frame visually-hidden" src="https://www.youtube.com/embed/'.concat(d,'"\n    frameborder = \'0\';\n    title = \'YouTube video player\';\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen></iframe>\n    <button class="modal__btn-play">play</button>\n    <img class="modal__img" src="').concat("https://image.tmdb.org/t/p/w500/").concat(e,'" alt="cinema" />\n  </div>\n\n    <div class="modal__description-wrap">\n      <h2 class="modal__title">').concat(u,'</h2>\n      <table class="modal__info">\n        <tr>\n          <td class="modal__info-key">Vote/votes</td>\n          <td class="modal__info-value">\n            <span class="modal__info-value--accent">').concat(i,'</span>/<span\n              class="modal__info-key--accent"\n              >').concat(a,'</span\n            >\n          </td>\n        </tr>\n        <tr>\n          <td class="modal__info-key">Popularity</td>\n          <td class="modal__info-value">').concat(s,'</td>\n        </tr>\n        <tr>\n          <td class="modal__info-key">Original Title</td>\n          <td class="modal__info-value">').concat(c,'</td>\n        </tr>\n        <tr>\n          <td class="modal__info-key">Genre</td>\n          <td class="modal__info-value">').concat(h,'</td>\n        </tr>\n      </table>\n\n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">').concat(l,'</p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">\n          add to Watched\n        </button>\n        <button class="btn-add-queue" data-action="add-queue">\n          add to queue\n        </button>\n      </div>\n    </div>\n  </div>\n</div>')};function y(t){var e=document.querySelector(".modal__img"),n=document.querySelector(".video-frame"),r=document.querySelector(".modal__btn-play");t.target.classList.contains("modal__btn-play")&&(e.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),r.classList.toggle("visually-hidden"),console.log("on btn player click"))}var g="watched-list",m="queue-list",b={getWatchedList:function(){try{return JSON.parse(localStorage.getItem(g))}catch(t){console.log(t)}},setWatchedList:function(t){localStorage.setItem(g,JSON.stringify(t))},getQueueList:function(){try{return JSON.parse(localStorage.getItem(m))}catch(t){console.log(t)}},setQueueList:function(t){localStorage.setItem(m,JSON.stringify(t))},isWatchedListEmpty:function(){var t=this.getWatchedList();return!t||0===t.length},isQueueListEmpty:function(){var t=this.getQueueList();return!t||0===t.length},isMovieInWatchedList:function(t){return!this.isWatchedListEmpty()&&!!this.getWatchedList().includes(t)},isMovieInQueueList:function(t){return!this.isQueueListEmpty()&&!!this.getQueueList().includes(t)},addMovieToWatchedList:function(t){if(this.isWatchedListEmpty())localStorage.setItem(g,JSON.stringify([t]));else{var e=this.getWatchedList();e.push(t),this.setWatchedList(e)}},addMovieToQueueList:function(t){if(this.isQueueListEmpty())localStorage.setItem(m,JSON.stringify([t]));else{var e=this.getQueueList();e.push(t),this.setQueueList(e)}},removeMovieFromWatchedList:function(t){var e=this.getWatchedList().filter((function(e){return e!==t}));this.setWatchedList(e)},removeMovieFromQueueList:function(t){var e=this.getQueueList().filter((function(e){return e!==t}));this.setQueueList(e)},clearWatchedList:function(){localStorage.removeItem(g)},clearQueueList:function(){localStorage.removeItem(m)}};function _(t){if("add-queue"===t.target.dataset.action){var e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-wached"),r=t.currentTarget.getAttribute("id");if(b.isMovieInQueueList(r)?b.removeMovieFromQueueList(r):b.addMovieToQueueList(r),e.classList.toggle("isActive"),b.isMovieInQueueList(r)?e.textContent="delete to queue":e.textContent="add to queue",console.log(b.getQueueList()),!e.disabled&&!n.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function L(t){if("add-wached"===t.target.dataset.action){var e=document.querySelector(".btn-add-wached"),n=document.querySelector(".btn-add-queue"),r=t.currentTarget.getAttribute("id");if(b.isMovieInWatchedList(r)?b.removeMovieFromWatchedList(r):b.addMovieToWatchedList(r),e.classList.toggle("isActive"),b.isMovieInWatchedList(r)?e.textContent="delete to wached":e.textContent="add to watched",console.log(b.getWatchedList()),!n.disabled&&!e.disabled)return n.disabled=!0;if(n.disabled)return n.disabled=!1}}function w(){var t=document.querySelector(".backdrop");t.classList.remove("visually-hidden"),document.addEventListener("keydown",x),t.addEventListener("click",E),t.addEventListener("click",_),t.addEventListener("click",L),t.addEventListener("click",y)}function k(){var t=document.querySelector(".backdrop");t.classList.add("visually-hidden"),document.removeEventListener("keydown",x),t.removeEventListener("click",E),t.removeEventListener("click",_),t.removeEventListener("click",L),t.removeEventListener("click",y)}function x(t){"Escape"===t.code&&k()}function E(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||k()}var S=new l;function q(t){return M.apply(this,arguments)}function M(){return(M=t(e)(t(r).mark((function e(n){var o,a,i,c;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".backdrop").setAttribute("id",n),t.prev=2,t.next=5,S.fetchMovieDetails(n);case 5:return o=t.sent,t.next=8,p(o);case 8:return a=t.sent,t.next=11,Q(a);case 11:w(),t.next=19;break;case 14:return t.prev=14,t.t0=t.catch(2),alert("error"),console.log(t.t0),t.abrupt("return");case 19:i=document.querySelector(".btn-add-queue"),c=document.querySelector(".btn-add-wached"),b.isMovieInQueueList(n)&&(i.textContent="delete to queue",i.classList.toggle("isActive"),c.disabled=!0),b.isMovieInWatchedList(n)&&(c.textContent="delete to Wached",c.classList.toggle("isActive"),i.disabled=!0);case 23:case"end":return t.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}function Q(t){return O.apply(this,arguments)}function O(){return(O=t(e)(t(r).mark((function e(n){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".backdrop").innerHTML=n;case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function W(t){return I.apply(this,arguments)}function I(){return(I=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.querySelector(".backdrop"),document.querySelector(".backdrop"),!n.target.classList.contains("gallery__item")){t.next=6;break}return o=n.target.dataset.id,t.next=6,q(o);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}new l;var T=document.querySelector(".container");window.addEventListener("DOMContentLoaded",(function(){T.innerHTML='<header class="header">\n  <nav class="header__nav">\n    <button class="header__btn-home" type="button">Home</button>\n    <button class="header__btn-libary" type="button">My Libary</button>\n  </nav>\n  <form class="form">\n    <input type="text" name="input" placeholder="search" />\n  </form>\n  <div class="libary__options visually-hidden">\n    <button class="libary__options-watched">Watched</button>\n    <button class="libary__options-queue">Queue</button>\n  </div>\n</header>\n<main>\n  <ul class="gallery"></ul>\n\n  <div class="gallery__option">\n    <div class="pagination"></div>\n  </div>\n</main>\n<footer>\n  <span>© 2022 | All Rights Reserved |</span>\n</footer>\n<div class="backdrop visually-hidden"></div>',f();document.querySelector(".gallery").addEventListener("click",W)}))}();
//# sourceMappingURL=index.90f13e76.js.map
