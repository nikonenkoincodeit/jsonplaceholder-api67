(()=>{"use strict";document.querySelector(".js-user-table"),document.querySelector(".js-tbody"),document.querySelector(".js-album");const e=document.querySelector(".js-list-song"),t=location.search;console.log(t);const o=new URLSearchParams(t).get("albumId")||1;console.log(o),function(e=""){return fetch(`https://jsonplaceholder.typicode.com/${e}`).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)}))}(`photos?albumId=${o}`).then((t=>{var o;console.log(t),o=function(e=[]){return e.map((({id:e,thumbnailUrl:t,title:o})=>`<div class="card" data-set="${e}">\n    <img class="bd-placeholder-img card-img-top" width="200" height="200"\n      src="${t}" alt="${o}" />\n    <div class="card-body">\n      <p class="card-text">\n      ${o}\n      </p>\n    </div>\n  </div>`)).join("")}(t),e.innerHTML=o}))})();