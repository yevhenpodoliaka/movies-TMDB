!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequireb382;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequireb382=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.39c7e77e.js","cZRJc":"cinema.9bc895e8.jpg","ee16w":"sprite.823233f3.svg"}'));var i={};function c(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}};var s={},u=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return Q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",h={};function g(){}function m(){}function y(){}var b={};s(b,a,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(O([])));L&&L!==n&&r.call(L,a)&&(b=L);var w=y.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:Q}}function Q(){return{value:e,done:!0}}return m.prototype=y,s(w,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(s);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var d={};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,n){e&&f(t.prototype,e);n&&f(t,n);return t};var p,v="https://api.themoviedb.org/3",h="b6201d5209ec246f483ea16253167a90",g=function(){"use strict";function t(){e(l)(this,t),this.searchQuery="",this.page=1,this.searchId=""}return e(d)(t,[{key:"fetchGenres",value:function(t){var e="".concat(v,"/genre/").concat(t,"/list?api_key=").concat(h,"&language=en-US");return fetch(e).then((function(t){return t.json()}))}},{key:"fetchTrending",value:function(){var t=this;return e(i)(e(s).mark((function n(){var r,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/trending/movie/day?api_key=").concat(h,"&page=").concat(t.page),e.next=3,fetch(r);case 3:return o=e.sent,a=o.json(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),n)})))()}},{key:"fetchSearchMovie",value:function(){var t=this;return e(i)(e(s).mark((function n(){var r,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/search/movie?api_key=").concat(h,"&language=en-US&query=").concat(t.searchQuery,"&page=").concat(t.page,"&include_adult=false"),e.next=3,fetch(r);case 3:return o=e.sent,a=o.json(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),n)})))()}},{key:"fetchMovieDetails",value:function(t){return e(i)(e(s).mark((function n(){var r,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/movie/").concat(t,"?api_key=").concat(h,"&language=en-US"),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"searchTrailerById",value:function(t){return e(i)(e(s).mark((function n(){var r,o,a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/movie/").concat(t,"/videos?api_key=").concat(h,"&language=en-US"),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,i=a.results.find((function(t){return t.name.includes("Official")})),e.abrupt("return",i.key);case 9:case"end":return e.stop()}}),n)})))()}},{key:"fetchMoviesListById",value:function(t){var n=this;return e(i)(e(s).mark((function r(){var o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(t){return n.fetchMovieDetails(t)}));case 2:return o=e.sent,e.next=5,Promise.all(o);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),r)})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"pageNumber",set:function(t){this.page=t}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"movieId",get:function(){return this.searchId},set:function(t){this.searchId=t}}]),t}();p=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("cZRJc");var m=function(t){return t.map((function(t){var n=t.id,r=t.title,o=t.poster_path,a=t.release_date,i=t.vote_average,c=o?"https://image.tmdb.org/t/p/w500/".concat(o):"".concat(e(p)),s=new Date(a).getFullYear();return'<li class="gallery__item" data-id="'.concat(n,'">\n      <div class="info-wrap">\n    <img src= ').concat(c,' alt="" class="poster">\n    <p class="card__title">').concat(r,'</p>\n    <p class="card__date">').concat(s,'</p>\n    <p class="card__rating">').concat(i,"</p>\n    </div>\n</li>")})).join("")};function y(t,e){document.querySelectorAll(".pagination__btn").forEach((function(e){t===Number(e.textContent)&&e.classList.add("current-page")}))}var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(t){return _.default(t)||L.default(t)||x.default(t)||w.default()};var _=k(a("kMC0W")),L=k(a("7AJDX")),w=k(a("8CtQK")),x=k(a("auk6i"));function k(t){return t&&t.__esModule?t:{default:t}}function S(t,n){return n<=7?e(b)(new Array(n).keys()).map((function(t){return'<button class="pagination__btn">'.concat(t+1,"</button>")})):t<4&&n>7?'<button class="pagination__btn">1</button>\n  <button class="pagination__btn">2</button>\n  <button class="pagination__btn">3</button>\n  <button class="pagination__btn">4</button>\n  <button class="pagination__btn">5</button>\n  <button class="pagination__btn">6</button>\n  <button class="last-page">'.concat(n,'</button>\n  <button class="next-page">&rarr;</button>'):t>=+n-5?' <button class="prev-page">&larr;</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">'.concat(+n-5,'</button>\n<button class="pagination__btn">').concat(+n-4,'</button>\n<button class="pagination__btn">').concat(+n-3,'</button>\n<button class="pagination__btn">').concat(+n-2,'</button>\n<button class="pagination__btn">').concat(+n-1,'</button>\n<button class="pagination__btn">').concat(+n,"</button>"):t>3&&n>7&&t!==n?' <button class="prev-page">&larr;</button>\n  <button class="pagination__btn">1</button>\n  <button class="pagination__btn">'.concat(+t-2,'</button>\n  <button class="pagination__btn">').concat(+t-1,'</button>\n  <button class="pagination__btn">').concat(+t,'</button>\n  <button class="pagination__btn">').concat(+t+1,'</button>\n  <button class="pagination__btn">').concat(+t+2,'</button>\n  <button class="last-page">').concat(n,'</button>\n  <button class="next-page">&rarr;</button>'):t===n?' <button class="prev-page">&larr;</button>\n<button class="pagination__btn">1</button>\n<button class="pagination__btn">'.concat(+n-5,'</button>\n<button class="pagination__btn">').concat(+n-4,'</button>\n<button class="pagination__btn">').concat(+n-3,'</button>\n<button class="pagination__btn">').concat(+n-2,'</button>\n<button class="pagination__btn">').concat(+n-1,'</button>\n<button class="pagination__btn">').concat(+n,"</button>"):void 0}function q(){var t=document.querySelector(".gallery__option");t.addEventListener("click",Q),t.addEventListener("click",M),t.addEventListener("click",O),t.addEventListener("click",E)}function E(t){t.target.classList.contains("last-page")&&(I.page=+t.target.textContent,T(),window.scroll({top:0,behavior:"smooth"}),y(I.page))}function M(t){t.target.classList.contains("next-page")&&(I.page+=3,T(),window.scroll({top:0,behavior:"smooth"}),y(I.page))}function O(t){t.target.classList.contains("prev-page")&&(I.page-=3,console.log(I.page),T(),window.scroll({top:0,behavior:"smooth"}),y(I.page))}function Q(t){t.target.classList.contains("pagination__btn")&&(I.page=+t.target.textContent,console.log(I.page),T(),window.scroll({top:0,behavior:"smooth"}),y(t.target.textContent))}var I=new g;function T(){return j.apply(this,arguments)}function j(){return(j=e(i)(e(s).mark((function t(){var n,r,o,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".gallery"),r=document.querySelector(".gallery__option"),t.next=4,I.fetchTrending();case 4:return o=t.sent,t.next=7,m(o.results);case 7:a=t.sent,n.innerHTML=a,r.innerHTML=S(o.page,o.total_pages),y(o.page),q();case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var A;A=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ee16w");var W=function(t){var n=t.poster_path,r=t.genres,o=void 0===r?[]:r,a=t.vote_count,i=t.vote_average,c=t.original_title,s=t.popularity,u=t.title,l=t.overview;0===l.length&&(l+="Sorry, there is no description for this movie.");var d=o.map((function(t){return t.name})),f=n?"https://image.tmdb.org/t/p/w500/".concat(n):"".concat(e(p)),v=l.slice(0,1e3);return'<div class="modal">\n        <div class="modal__card">\n         <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">\n        <use href="'.concat(e(A),'#icon-close"></use>\n      </svg></button>\n        <div class="modal__content">\n\n    <button class="modal__btn-play is-hidden"><svg class="modal__play-icon">\n        <use href="').concat(e(A),'#icon-youtube"></use>\n      </svg></button>\n    <img class="modal__img" src="').concat(f,'" alt="cinema" />\n  </div>\n\n    <div class="modal__description-wrap">\n      <h2 class="modal__title">').concat(u,'</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value">\n    <span class="modal__info-value--accent">').concat(i,'</span>\n     <span class="modal__info-value--slash">/ </span\n    ><span class="modal__info-value--grey">').concat(a,'</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">').concat(s,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">').concat(c,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">').concat(d,'</td>\n  </tr>\n</table>\n\n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ').concat(v,'\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-watched" data-action="add-watched">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n    </div>\n  </div>')};new g;function C(t){var n,r=document.querySelector(".backdrop"),o=document.querySelector(".modal"),a=document.querySelector(".modal__card");if(t.target.classList.contains("modal__btn-play")){var i=t.target.getAttribute("id"),c=(n=i,'<div\n  class ="modal__video is-hidden">\n     <button  class="modal__btn-close-trailer"><svg class="modal__close-icon" width="14" height="14">\n        <use href="'.concat(e(A),'#icon-close"></use>\n      </svg></button>\n    <iframe class="video-frame" src="https://www.youtube.com/embed/').concat(n,"\"\n    frameborder = '0';\n    title = 'YouTube video player';\n      allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe></div>"));o.insertAdjacentHTML("afterbegin",c),a.classList.add("is-hidden"),document.querySelector(".modal__video").classList.remove("is-hidden"),o.style.backgroundColor="transparent",r.addEventListener("click",P)}}function P(t){var e=document.querySelector(".backdrop"),n=document.querySelector(".modal__video"),r=document.querySelector(".modal__card"),o=document.querySelector(".modal");t.target.classList.contains("modal__btn-close-trailer")&&(n.remove(),n.classList.add("is-hidden"),r.classList.remove("is-hidden"),o.style.backgroundColor="white",e.removeEventListener("click",P))}var N="watched-list",H="queue-list",F={getWatchedList:function(){try{return JSON.parse(localStorage.getItem(N))}catch(t){console.log(t)}},setWatchedList:function(t){localStorage.setItem(N,JSON.stringify(t))},getQueueList:function(){try{return JSON.parse(localStorage.getItem(H))}catch(t){console.log(t)}},setQueueList:function(t){localStorage.setItem(H,JSON.stringify(t))},isWatchedListEmpty:function(){var t=this.getWatchedList();return!t||0===t.length},isQueueListEmpty:function(){var t=this.getQueueList();return!t||0===t.length},isMovieInWatchedList:function(t){return!this.isWatchedListEmpty()&&!!this.getWatchedList().includes(t)},isMovieInQueueList:function(t){return!this.isQueueListEmpty()&&!!this.getQueueList().includes(t)},addMovieToWatchedList:function(t){if(this.isWatchedListEmpty())localStorage.setItem(N,JSON.stringify([t]));else{var e=this.getWatchedList();e.push(t),this.setWatchedList(e)}},addMovieToQueueList:function(t){if(this.isQueueListEmpty())localStorage.setItem(H,JSON.stringify([t]));else{var e=this.getQueueList();e.push(t),this.setQueueList(e)}},removeMovieFromWatchedList:function(t){var e=this.getWatchedList().filter((function(e){return e!==t}));this.setWatchedList(e)},removeMovieFromQueueList:function(t){var e=this.getQueueList().filter((function(e){return e!==t}));this.setQueueList(e)},clearWatchedList:function(){localStorage.removeItem(N)},clearQueueList:function(){localStorage.removeItem(H)}};function R(t){if("add-queue"===t.target.dataset.action){var e=document.querySelector(".btn-add-queue"),n=document.querySelector(".btn-add-watched"),r=t.currentTarget.getAttribute("id");if(!F.isMovieInQueueList(r)&&!F.isMovieInWatchedList(r))return F.addMovieToQueueList(r),e.classList.toggle("isActive"),void(e.textContent="delete from queue");if(F.isMovieInQueueList(r))return F.removeMovieFromQueueList(r),e.classList.toggle("isActive"),void(e.textContent="add to queue");if(F.isMovieInWatchedList(r))return F.removeMovieFromWatchedList(r),n.classList.toggle("isActive"),n.textContent="add to watched",F.addMovieToQueueList(r),e.classList.toggle("isActive"),void(e.textContent="delete from queue")}}function J(t){if("add-watched"===t.target.dataset.action){var e=document.querySelector(".btn-add-watched"),n=document.querySelector(".btn-add-queue"),r=t.currentTarget.getAttribute("id");if(!F.isMovieInWatchedList(r)&&!F.isMovieInQueueList(r))return F.addMovieToWatchedList(r),e.classList.toggle("isActive"),void(e.textContent="delete from watched");if(F.isMovieInWatchedList(r))return F.removeMovieFromWatchedList(r),e.classList.toggle("isActive"),void(e.textContent="add to watched");if(F.isMovieInQueueList(r))return F.removeMovieFromQueueList(r),n.classList.toggle("isActive"),n.textContent="add to queue",F.addMovieToWatchedList(r),e.classList.toggle("isActive"),void(e.textContent="delete from watched")}}function D(){var t=document.querySelector(".backdrop");t.classList.remove("visually-hidden"),document.addEventListener("keydown",U),t.addEventListener("click",B),t.addEventListener("click",R),t.addEventListener("click",J),t.addEventListener("click",C),document.body.addEventListener("wheel",V,{passive:!1})}function G(){var t=document.querySelector(".backdrop");t.classList.add("visually-hidden"),document.querySelector(".modal").remove(),document.removeEventListener("keydown",U),t.removeEventListener("click",B),t.removeEventListener("click",R),t.removeEventListener("click",J),t.removeEventListener("click",C),document.body.removeEventListener("wheel",V,{passive:!1})}function U(t){"Escape"===t.code&&G()}function B(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||G()}function V(t){return t.preventDefault(),t.stopPropagation(),!1}var Y=new g;function $(t){return z.apply(this,arguments)}function z(){return(z=e(i)(e(s).mark((function t(n){var r,o,a,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".backdrop").setAttribute("id",n),t.prev=2,t.next=5,Y.fetchMovieDetails(n);case 5:return r=t.sent,t.next=8,W(r);case 8:return o=t.sent,t.next=11,K(o);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:return a=document.querySelector(".btn-add-queue"),i=document.querySelector(".btn-add-watched"),F.isMovieInQueueList(n)&&(a.textContent="delete from queue",a.classList.toggle("isActive")),F.isMovieInWatchedList(n)&&(i.textContent="delete from watched",i.classList.toggle("isActive")),t.next=22,X(n);case 22:D();case 23:case"end":return t.stop()}}),t,null,[[2,13]])})))).apply(this,arguments)}function K(t){document.querySelector(".backdrop").innerHTML=t}function X(t){return Z.apply(this,arguments)}function Z(){return(Z=e(i)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector(".modal__btn-play"),t.prev=1,t.next=4,Y.searchTrailerById(n);case 4:o=t.sent,r.setAttribute("id",o),r.classList.remove("is-hidden"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function tt(t){return et.apply(this,arguments)}function et(){return(et=e(i)(e(s).mark((function t(n){var r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.querySelector(".backdrop"),document.querySelector(".backdrop"),!n.target.classList.contains("gallery__item")){t.next=6;break}return r=n.target.dataset.id,t.next=6,$(r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function nt(){var t=document.querySelector(".search-list__option");t.addEventListener("click",it),t.addEventListener("click",ot),t.addEventListener("click",at),t.addEventListener("click",rt)}function rt(t){t.target.classList.contains("last-page")&&(console.log(lt),lt.page=+t.target.textContent,ct(),window.scroll({top:0,behavior:"smooth"}),y(lt.page))}function ot(t){t.target.classList.contains("next-page")&&(console.log(lt),lt.page+=3,ct(),window.scroll({top:0,behavior:"smooth"}),y(lt.page))}function at(t){t.target.classList.contains("prev-page")&&(lt.page-=3,console.log(lt),ct(),window.scroll({top:0,behavior:"smooth"}),y(lt.page))}function it(t){t.target.classList.contains("pagination__btn")&&(lt.page=+t.target.textContent,console.log(lt),ct(),window.scroll({top:0,behavior:"smooth"}),y(t.target.textContent))}function ct(){return st.apply(this,arguments)}function st(){return(st=e(i)(e(s).mark((function t(){var n,r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".gallery"),document.querySelector(".gallery__option").innerHTML="",n=document.querySelector(".search-list__option"),t.next=5,lt.fetchSearchMovie();case 5:if(0!==(r=t.sent).results.length){t.next=9;break}return alert("Search result not successful. Enter the correct movie name and "),t.abrupt("return");case 9:return t.next=11,m(r.results);case 11:return o=t.sent,t.next=14,ut(o);case 14:n.innerHTML=S(r.page,r.total_pages),y(r.page),nt();case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(t){document.querySelector(".gallery").innerHTML=t}var lt=new g;function dt(t){return ft.apply(this,arguments)}function ft(){return(ft=e(i)(e(s).mark((function t(n){var r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector(".form__input"),n.preventDefault(),lt.searchQuery=n.target.elements.input.value,lt.resetPage(),ct(),n.target.elements.input.value="",r.setAttribute("placeholder",lt.searchQuery);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var pt=new g;function vt(){return ht.apply(this,arguments)}function ht(){return(ht=e(i)(e(s).mark((function t(){var n,r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=F.getWatchedList()){t.next=4;break}return alert("add movies from Watched list"),t.abrupt("return");case 4:return t.next=6,pt.fetchMoviesListById(n);case 6:return r=t.sent,t.next=9,m(r);case 9:return o=t.sent,t.abrupt("return",gt(o));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function gt(t){document.querySelector(".gallery").innerHTML=t}function mt(){return yt.apply(this,arguments)}function yt(){return(yt=e(i)(e(s).mark((function t(){var n,r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=F.getQueueList()){t.next=4;break}return alert("add movies from Queue list"),t.abrupt("return");case 4:return t.next=6,pt.fetchMoviesListById(n);case 6:return r=t.sent,t.next=9,m(r);case 9:return o=t.sent,t.abrupt("return",gt(o));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function bt(t){var e=document.querySelector(".library__options-watched"),n=document.querySelector(".library__options-queue");if(t.target.classList.contains("library__options-watched")){if(!F.getWatchedList())return void alert("add movies from Watched list");vt(),n.classList.remove("current-page"),e.classList.add("current-page")}}function _t(t){var e=document.querySelector(".library__options-watched"),n=document.querySelector(".library__options-queue");if(t.target.classList.contains("library__options-queue")){if(!F.getQueueList())return void alert("add movies from Queue list");mt(),e.classList.remove("current-page"),n.classList.add("current-page")}}function Lt(){document.querySelector(".form").classList.remove("visually-hidden"),document.querySelector(".library__options").classList.add("visually-hidden"),document.querySelector(".pagination").classList.remove("visually-hidden"),document.querySelector(".form__input").setAttribute("placeholder","search");document.querySelector(".search-list__option").innerHTML="";T()}function wt(){var t=document.querySelector(".form"),e=document.querySelector(".library__options"),n=document.querySelector(".pagination"),r=document.querySelector(".library__options-watched"),o=document.querySelector(".library__options-queue");if(F.getQueueList()||F.getWatchedList())return F.getWatchedList()?(t.classList.add("visually-hidden"),e.classList.remove("visually-hidden"),e.addEventListener("click",bt),e.addEventListener("click",_t),n.classList.add("visually-hidden"),vt(),void r.classList.add("current-page")):F.getQueueList()?(t.classList.add("visually-hidden"),e.classList.remove("visually-hidden"),e.addEventListener("click",bt),e.addEventListener("click",_t),n.classList.add("visually-hidden"),mt(),void o.classList.add("current-page")):void 0;alert("add movies from Watched list or Queue list")}new g;var xt=document.querySelector(".container");window.addEventListener("DOMContentLoaded",(function(){xt.innerHTML='<header class="header">\n  <nav class="header__nav">\n    <button class="header__btn-home" type="button">Home</button>\n    <button class="header__btn-library" type="button">My Library</button>\n  </nav>\n  <form class="form">\n    <input class="form__input" type="text" name="input" placeholder="search" />\n  </form>\n  <div class="library__options visually-hidden">\n    <button class="library__options-watched">Watched</button>\n    <button class="library__options-queue">Queue</button>\n  </div>\n</header>\n<main>\n  <ul class="gallery"></ul>\n\n  <div class="library visually-hidden">\n   <ul class="library__queue "></ul> \n   <ul class="library__watched"></ul>\n  </div>\n  <div class="gallery__option pagination"></div>\n  <div class="search-list__option pagination"></div>\n\n \n</main>\n<footer>\n  <span>© 2022 | All Rights Reserved |</span>\n</footer>\n<div class="backdrop visually-hidden"></div>',T();document.querySelector(".gallery").addEventListener("click",tt),document.querySelector(".form").addEventListener("submit",dt),document.querySelector(".header__btn-home").addEventListener("click",Lt),document.querySelector(".header__btn-library").addEventListener("click",wt)}))}();
//# sourceMappingURL=index.39c7e77e.js.map
