// MIRNOX store logic
const fmt = n => n.toLocaleString('ar-EG') + ' ج.م';
const getCart = ()=> JSON.parse(localStorage.getItem('mirnox_cart')||'[]');
const setCart = c => {localStorage.setItem('mirnox_cart',JSON.stringify(c)); updateBadge();};
function updateBadge(){
  const c=getCart(); const n=c.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-count').forEach(e=>e.textContent=n);
}
function addToCart(id,color,qty=1){
  let c=getCart();
  const f=c.find(i=>i.id===id&&i.color===color);
  if(f) f.qty+=qty; else c.push({id,color,qty});
  setCart(c); toast('اتضافت للسلة ✔');
}
function toast(msg){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.style.display='block';
  clearTimeout(t._h);t._h=setTimeout(()=>t.style.display='none',2200);
}
function stars(r){
  let s='';for(let i=1;i<=5;i++) s+= i<=Math.round(r)?'★':'☆';
  return `<span class="stars">${s}</span>`;
}
function productCard(p){
  const dots=p.colors.map(c=>`<span class="dot" title="${c.name}" style="background:${c.hex}"></span>`).join('');
  return `<div class="card">
    <a class="card-media" href="product.html?id=${p.id}">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
      <img loading="lazy" src="${p.colors[0].img}" alt="${p.name}">
    </a>
    <div class="card-body">
      <a href="product.html?id=${p.id}"><h3 class="card-title">${p.name}</h3></a>
      <div>${stars(p.rating)} <small style="color:#6b7a74">(${p.reviews} تقييم)</small></div>
      <div class="colors-dots">${dots}</div>
      <div class="price-row"><span class="price">${fmt(p.price)}</span>${p.old?`<span class="old">${fmt(p.old)}</span>`:''}</div>
      <div style="display:flex;gap:.5rem;margin-top:auto">
        <a class="btn btn-green" style="flex:1;justify-content:center;padding:.65rem" href="product.html?id=${p.id}">التفاصيل</a>
        <button class="btn btn-gold" style="padding:.65rem 1rem" onclick="addToCart('${p.id}','${p.colors[0].name}',1)">+ سلة</button>
      </div>
    </div>
  </div>`;
}
document.documentElement.classList.add('js');
/* Luxury reveal-on-scroll: elements glide up from bottom with smooth motion */
let __io=null;
function revealInit(scope){
  if(!('IntersectionObserver' in window)) return;
  if(!__io){
    __io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          setTimeout(()=>{e.target.style.transitionDelay='0ms';},1300);
          __io.unobserve(e.target);
        }
      });
    },{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
  }
  const root=scope||document;
  root.querySelectorAll('.card,.feat,.panel,.sec-head,.pd,.tabs').forEach(el=>{
    if(el.classList.contains('revealed')) return;
    el.classList.add('reveal','revealed');
    const sibs=Array.from(el.parentNode.children).filter(c=>c.classList&&c.classList.contains('reveal')&&!c.classList.contains('visible'));
    el.style.transitionDelay=((sibs.indexOf(el)%4)*90)+'ms';
    __io.observe(el);
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  updateBadge();
  const b=document.querySelector('.burger');
  const l=document.querySelector('.links');
  if(b&&l) b.onclick=()=>l.classList.toggle('open');
  document.querySelectorAll('.marquee-track').forEach(t=>{t.innerHTML+=t.innerHTML;t.innerHTML+=t.innerHTML;});
  revealInit();
});
