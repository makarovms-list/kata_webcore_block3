!function(e){var r={};function n(i){if(r[i])return r[i].exports;var t=r[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,r,i){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(i,t,function(r){return e[r]}.bind(null,t));return i},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){e.exports=n(1)},function(e,r,n){"use strict";n.r(r);n(2),n(3);var i=document.querySelector(".brand-slider__more");function t(e,r){for(var n=0,i=e.length;n<i;n++)if(e[n]==r)return!0;return!1}void 0!==i&&null!=i&&(i.onclick=function(){var e=function(e,r){var n=document.querySelectorAll(r),i=e.parentNode;for(;i&&!t(n,i);)i=i.parentNode;return i}(this,".brand-slider");this.classList.contains("brand-slider__more--hide")?(this.classList.remove("brand-slider__more--hide"),e.classList.remove("brand-slider__list--open"),this.innerHTML="Показать все"):(this.classList.add("brand-slider__more--hide"),e.classList.add("brand-slider__list--open"),this.innerHTML="Скрыть все")}),window.addEventListener("resize",(function(e){if(document.body.clientWidth<426){var r=document.querySelector(".brand-slider");if(void 0!==r&&null!=r)new Swiper(".brand-slider",{speed:600,centeredSlides:!0,spaceBetween:16,touchRatio:1,loop:!0,wrapperClass:"brand-slider__wrapper",slideClass:"brand-slider__item",slidesPerView:1.2,autoplay:{delay:6e3},breakpoints:{1500:{slidesPerView:8,spaceBetween:32},1200:{slidesPerView:6,spaceBetween:32},992:{slidesPerView:4,spaceBetween:32},768:{slidesPerView:3,spaceBetween:32},576:{slidesPerView:3,spaceBetween:24},400:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1,spaceBetween:16}},pagination:{el:".swiper-pagination",type:"bullets"}})}}),!0),window.addEventListener("DOMContentLoaded",(function(e){if(document.body.clientWidth<426){var r=document.querySelector(".brand-slider");if(void 0!==r&&null!=r)new Swiper(".brand-slider",{speed:600,centeredSlides:!0,spaceBetween:16,touchRatio:1,loop:!0,wrapperClass:"brand-slider__wrapper",slideClass:"brand-slider__item",slidesPerView:1.2,autoplay:{delay:6e3},breakpoints:{1500:{slidesPerView:8,spaceBetween:32},1200:{slidesPerView:6,spaceBetween:32},992:{slidesPerView:4,spaceBetween:32},768:{slidesPerView:3,spaceBetween:32},576:{slidesPerView:3,spaceBetween:24},400:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1,spaceBetween:16}},pagination:{el:".swiper-pagination",type:"bullets"}})}}),!0)},function(e,r,n){},function(e,r,n){}]);
//# sourceMappingURL=bundle.js.map