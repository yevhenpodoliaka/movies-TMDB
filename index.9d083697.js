!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequireb382;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequireb382=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.9d083697.js","cZRJc":"cinema.9bc895e8.jpg"}'));var i={};function c(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,u,"next",t)}function u(t){c(a,r,o,i,u,"throw",t)}i(void 0)}))}};var u={},s=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(q([])));_&&_!==n&&r.call(_,a)&&(w=_);var x=y.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function q(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=y,u(x,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(u);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var d={};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,n){e&&f(t.prototype,e);n&&f(t,n);return t};var h={gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination"),paginationBtn:document.querySelectorAll(".pangination__btn"),paginationLastPage:document.querySelector(".last-page"),decrementBtn:document.querySelector(".prew-btn"),incrementBtn:document.querySelector(".next-btn"),homeBtn:document.querySelector(".header__btn-home"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),addToQueue:null,addWached:null},p=function(){"use strict";function t(){var n,r;e(l)(this,t),this.watchedList=null!==(n=JSON.parse(localStorage.getItem("watchedList")))&&void 0!==n?n:[],this.queuedList=null!==(r=JSON.parse(localStorage.getItem("queuedList")))&&void 0!==r?r:[]}return e(d)(t,[{key:"addInWatchedList",value:function(t){this.watchedList.push(t),localStorage.setItem("watchedList",JSON.stringify(this.watchedList))}},{key:"addInQueuedList",value:function(t){this.queuedList.push(t),localStorage.setItem("queuedList",JSON.stringify(this.queuedList))}}]),t}();new p;var v=function(t){return t.map((function(t){var e=t.id,n=t.title,r=t.poster_path,o=t.release_date,a=t.vote_average;return'<li class="gallery__item" id="'.concat(e,'">\n      <div class="info-wrap">\n    <img src= ').concat("https://image.tmdb.org/t/p/w500/").concat(r,' alt="" class="poster">\n    <p class="title">').concat(n,'</p>\n    <p class="date">Date: ').concat(o,'</p>\n    <p class="rating">Rating :').concat(a,"</p>\n    </div>\n</li>")})).join("")},g="https://api.themoviedb.org/3/",m="?api_key=b6201d5209ec246f483ea16253167a90",y="https://api.themoviedb.org/3/trending/all/day"+m,w=function(){"use strict";function t(){e(l)(this,t),this.homeUrl=y,this.url=y,this.currentPage=1,this.currentId=null,this.totalPage=null}return e(d)(t,[{key:"fetchByUrl",value:function(){var t=this;return e(i)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url+"&page=".concat(t.currentPage));case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,t.totalPage=o.total_pages,console.log(t.currentPage),console.log(t.totalPage),e.abrupt("return",o.results);case 10:case"end":return e.stop()}}),n)})))()}},{key:"fetchByWord",value:function(t){var n=this;return e(i)(e(u).mark((function r(){var o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.url="https://api.themoviedb.org/3/search/movie"+m+"&query=".concat(t),e.next=3,fetch(n.url+"&page=".concat(n.currentPage));case 3:return o=e.sent,e.next=6,o.json();case 6:return a=e.sent,n.totalPage=a.total_pages,console.log(n.currentPage),console.log(n.totalPage),e.abrupt("return",a.results);case 11:case"end":return e.stop()}}),r)})))()}},{key:"incrementPage",value:function(){this.currentPage+=1}},{key:"decrementPage",value:function(){this.currentPage>1&&(this.currentPage-=1)}},{key:"fetchById",value:function(t){return e(i)(e(u).mark((function n(){var r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g+"movie/".concat(t)+m);case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),n)})))()}}]),t}();a("aNJCr").getBundleURL("EVgbq"),a("iE7OH").resolve("cZRJc");var b=new w,_=new p;function x(t){return L.apply(this,arguments)}function L(){return(L=e(i)(e(u).mark((function t(n){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h.backdrop.innerHTML=n;case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=e(i)(e(u).mark((function t(n){var r,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h.backdrop.setAttribute("id",n),t.next=3,b.fetchById(n);case 3:return r=t.sent,t.next=6,E(r);case 6:return o=t.sent,t.next=9,x(o);case 9:h.addToQueue=document.querySelector(".btn-add-queue"),h.addWached=document.querySelector(".btn-add-wached"),_.watchedList.includes(n)&&(h.addWached.textContent="film in wached List"),_.queuedList.includes(n)&&(h.addToQueue.textContent="film in queue List"),j();case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){var e=t.poster_path,n=(t.budget,t.genres),r=void 0===n?[]:n,o=(t.homepage,t.vote_count),a=t.vote_average,i=t.original_title,c=t.popularity,u=t.title,s=t.overview,l=r.map((function(t){return t.name}));return console.log(l),'<div class="modal">\n    <button class="modal__close" data-action="close-modal">&#10006;</button>\n \n      <img class="modal__img" src='.concat("https://image.tmdb.org/t/p/w500/").concat(e,' alt="cinema" />\n  \n    <div class="modal__description-wrap">\n      <h2 class="modal__title">').concat(u,'</h2>\n      <table class="modal__info">\n  <tr>\n    <td class="modal__info-key">Vote/votes</td>\n    <td "modal__info-value"><span class="modal__info-value--accent">').concat(a,'</span>/<span     class="modal__info-key--accent">').concat(o,'</span></td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Popularity</td>\n    <td "modal__info-value">').concat(c,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Original Title</td>\n    <td "modal__info-value">').concat(i,'</td>\n  </tr>\n  <tr>\n    <td class="modal__info-key">Genre</td>\n    <td "modal__info-value">').concat(l,'</td>\n  </tr>\n</table>\n    \n      <h3 class="modal__about-title">About</h3>\n      <p class="modal__about-text">\n        ').concat(s,'\n      </p>\n      <div class="modal__option">\n        <button class="btn-add-wached" data-action="add-wached">add to Watched</button>\n        <button class="btn-add-queue" data-action="add-queue">add to queue</button>\n      </div>\n    </div>\n  </div>')}function P(t){"Escape"===t.code&&N()}function O(t){if(console.log(h),"add-queue"===t.target.dataset.action){var e=t.currentTarget.getAttribute("id");_.addInQueuedList(e),console.log(localStorage.getItem("queuedList"))}}function S(t){if(console.log(h),"add-wached"===t.target.dataset.action){var e=t.currentTarget.getAttribute("id");_.addInWatchedList(e),console.log(localStorage.getItem("watchedList"))}}function q(t){"close-modal"!==t.target.dataset.action&&t.currentTarget!==t.target||N()}function j(){h.backdrop.classList.remove("visually-hidden"),document.addEventListener("keydown",P),h.backdrop.addEventListener("click",q),h.backdrop.addEventListener("click",O),h.backdrop.addEventListener("click",S)}function N(){h.backdrop.classList.add("visually-hidden"),document.removeEventListener("keydown",P),h.backdrop.removeEventListener("click",q),h.backdrop.removeEventListener("click",O),h.backdrop.removeEventListener("click",S)}var T=function(t){return k.apply(this,arguments)};function C(t){return I.apply(this,arguments)}function I(){return(I=e(i)(e(u).mark((function t(n){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h.paginationLastPage.textContent=B.totalPage,!n.target.classList.contains("next-btn")){t.next=7;break}return B.currentPage+=6,h.paginationBtn.forEach((function(t){t.textContent=Number(t.textContent)+6})),t.next=6,R();case 6:window.scroll({top:0,behavior:"smooth"});case 7:if(!n.target.classList.contains("prew-btn")){t.next=13;break}return B.currentPage-=6,h.paginationBtn.forEach((function(t){t.textContent=Number(t.textContent)-6})),t.next=12,R();case 12:window.scroll({top:0,behavior:"smooth"});case 13:if(!n.target.classList.contains("pangination__btn")){t.next=18;break}return B.currentPage=Number(n.target.textContent),t.next=17,R();case 17:window.scroll({top:0,behavior:"smooth"});case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(){console.log(h.paginationLastPage),h.pagination.addEventListener("click",C),h.paginationLastPage.textContent=B.totalPage})),window.addEventListener("DOMContentLoaded",R),h.homeBtn.addEventListener("click",(function(){B.currentPage=1,B.url=B.homeUrl,R()})),h.form.addEventListener("submit",(function(t){return F.apply(this,arguments)})),h.gallery.addEventListener("click",(function(t){return H.apply(this,arguments)}));var B=new w;function R(){return A.apply(this,arguments)}function A(){return(A=e(i)(e(u).mark((function t(){var n,r;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.fetchByUrl();case 2:return n=t.sent,t.next=5,v(n);case 5:return r=t.sent,t.next=8,G(r);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=e(i)(e(u).mark((function t(n){var r,o,a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),B.currentPage=1,r=n.target.elements.input.value,t.next=5,B.fetchByWord(r);case 5:if(0!==(o=t.sent).length){t.next=9;break}return alert("Search result not successful. Enter the correct movie name and "),t.abrupt("return");case 9:return t.next=11,v(o);case 11:return a=t.sent,t.next=14,G(a);case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t){h.gallery.innerHTML=t}function H(){return(H=e(i)(e(u).mark((function t(n){var r;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.getAttribute("id"),!n.target.classList.contains("gallery__item")){t.next=4;break}return t.next=4,T(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}();
//# sourceMappingURL=index.9d083697.js.map
