import{s as d,i as m}from"./assets/vendor-1d1bb5a2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(o){const r=o.map(({views:a,comments:e,downloads:t,likes:n,webformatURL:u,tags:p,largeImageURL:f})=>`<li>
      <div class="gallery">
        <a href="${f}">
          <img class="img" src="${u}" alt="${p}" width="360" height="200">
          <ul class="list">
            <li class="info-list"><span class="likes">Likes</span><span class="value">${n}</span></li>
            <li class="info-list"><span class="views">Views</span><span class="value">${a}</span></li>
            <li class="info-list"><span class="comments">Comments</span><span class="value">${e}</span></li>
            <li class="info-list"><span class="downloads">Downloads</span><span class="value">${t}</span></li>
          </ul>
        </a>
      </div>
    </li>`).join(""),s=document.querySelector(".object-list");return s.innerHTML=r,new d("gallery a",{caption:!0,captionsData:"alt",captionDelay:200,showCounter:!1}),r}const h="https://pixabay.com/api/",g="43231904-ed1d7987ff22f73c70c274b13";function b(o=""){const r=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const c=document.querySelector(".search-form"),l=document.querySelector("input"),L=document.querySelector(".object-list"),i=document.querySelector(".loader-box");c.addEventListener("submit",v);function v(o){if(o.preventDefault(),!l.value)return m.error({timeout:2e3,title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",closeOnClick:!0,position:"topCenter"});const r=l.value;i.style.display="flex",b(r).then(s=>{L.innerHTML=y(s.hits),c.reset(),i.style.display="none"}).catch(s=>{console.log(s),i.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
