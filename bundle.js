(()=>{var e={472:(e,n,t)=>{(n=t(278)(!1)).push([e.id,"*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\n.material-symbols-outlined {\n    cursor: pointer;\n}\n\nhtml {\n    box-sizing: border-box;\n    height: 99%;\n}\n\nbody {\n    margin: 0;\n    background-color: #fff;\n    color: #333;\n    font-size: 15px;\n    font-family: Helvetica, Arial, sans-serif;\n    font-weight: 400;\n    line-height: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n}\n\n.screen {\n    /*max-width: 320px;*/\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.topbar {\n    background-color: #8e24aa;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px;\n}\n\n.topbar .avatar {\n    background-color: white;\n    color: #333333;\n    border-radius: 50%;\n}\n\n.topbar .vertical {\n    display: flex;\n    flex-direction: column;\n}\n\n.topbar .last-seen {\n    font-size: 0.8em;\n}\n\n.horizontal {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.messages-scroll {\n    overflow-y: scroll;\n    background-color: aliceblue;\n}\n\n.messages{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    min-height: 100%;\n    /*max-height: 500px;*/\n}\n\n.message {\n    border-radius: 10px;\n    margin: 4px;\n    padding: 4px;\n    background-color: white;\n    align-self: flex-start;\n}\n\n.message.my{\n    align-self: flex-end;\n}\n\n.message .top {\n    display: flex;\n    justify-content: space-between;\n}\n\n.form {\n    display: flex;\n    align-items: center;\n    border: 1px solid rgba(25, 25, 25, 0.32);\n}\n\ninput[type=submit] {\n    visibility: collapse;\n}\n\ntextarea {\n    border: 0;\n    outline: none;\n    width: calc(100% - 2px);\n    font-family: sans-serif;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: .375rem;\n}",""]),e.exports=n},278:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(n&&"function"==typeof btoa){var s=(t=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},401:(e,n,t)=>{var r=t(292),o=t(472);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},292:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],l=n.base?s[0]+n.base:s[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var u=a(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=l(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=s(e,n),c=0;c<t.length;c++){var d=a(t[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=l}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t(401);var n=document.querySelector(".form-input"),r=document.querySelector(".messages"),o=document.querySelector(".messages-scroll");function i(e){r.innerHTML+='\n<div class="message'.concat("Иван"===e.name?" my":"",'">\n  <div class="top">\n    <div class="name">').concat(e.name,'</div>\n    <div class="time">').concat(e.time,'</div>\n  </div>\n    <div class="text">').concat(e.text.replaceAll("\n","<br>"),"</div>\n</div>\n"),o.scrollTop=o.scrollHeight}function a(){var e=new Date,t="".concat(e.getHours()).padStart(2,"0"),r="".concat(e.getMinutes()).padStart(2,"0"),o=n.value.replace(/</g,"&lt;").replace(/>/g,"&gt;"),a={name:"Иван",time:"".concat(t,":").concat(r),text:o};i(a),l.push(a),n.value="",n.dispatchEvent(new Event("input",{bubbles:!0}))}null===localStorage.getItem("messages")&&localStorage.setItem("messages",JSON.stringify([{name:"Дженнифер",text:"Я тут кое-что нарисовала... Посмотри как будет время...",time:"10:53"},{name:"Иван",text:"Горжусь тобой! Ты крутая!",time:"10:53"},{name:"Дженнифер",text:"Тебе нравится как я нарисовала?",time:"10:53"},{name:"Иван",text:"Джен, ты молодец!",time:"10:53"}]));var s,l=JSON.parse(localStorage.getItem("messages")),c=function(n){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}(l);try{for(c.s();!(s=c.n()).done;)i(s.value)}catch(e){c.e(e)}finally{c.f()}n.addEventListener("keypress",(function(e){"Enter"!==e.key||"Enter"===e.key&&(e.shiftKey||e.ctrlKey)||(e.preventDefault(),0!==e.target.value.trim().length&&a())})),document.getElementById("send").addEventListener("click",a),addEventListener("unload",(function(){return localStorage.setItem("messages",JSON.stringify(l))})),function(e,n){var t;(n=parseInt(null!==(t=n)&&void 0!==t?t:"5"))||(n=5),e.style.setProperty("resize","none"),e.style.setProperty("min-height","0"),e.style.setProperty("max-height","none"),e.style.setProperty("height","auto"),e.addEventListener("input",(function(){e.setAttribute("rows","1");var t=getComputedStyle(e),r=parseFloat(t["padding-left"])+parseFloat(t["padding-right"]),o=parseFloat(t["border-left-width"])+parseFloat(t["border-right-width"]);e.style.setProperty("overflow","hidden","important"),e.style.setProperty("width",parseFloat(t.width)-r-o+"px"),e.style.setProperty("box-sizing","content-box"),e.style.setProperty("padding-inline","0"),e.style.setProperty("border-width","0");var i=parseFloat(t["padding-top"])+parseFloat(t["padding-bottom"]),a="normal"===t["line-height"]?parseFloat(t.height):parseFloat(t["line-height"]),s=Math.round(e.scrollHeight);e.style.removeProperty("width"),e.style.removeProperty("box-sizing"),e.style.removeProperty("padding-inline"),e.style.removeProperty("border-width"),e.style.removeProperty("overflow");var l=Math.round((s-i)/a);e.setAttribute("rows",""+Math.min(l,n))})),e.dispatchEvent(new Event("input",{bubbles:!0}))}(n,10)})()})();