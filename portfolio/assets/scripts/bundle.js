!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){$(document).ready(function(){var e=$(".hamburger-menu"),t=$(".overlay-menu");e.on("click",function(e){$(this).toggleClass("hamburger-menu--active"),t.toggleClass("overlay-menu--active"),$(".overlay-menu__link").toggleClass("overlay-menu__link_scale"),$("body").toggleClass("body-active-menu")}),$(".arrow").click(function(){var e=$(this).attr("href");return 0!=$(e).length&&$("html, body").animate({scrollTop:$(e).offset().top},1e3),!1})})}]);