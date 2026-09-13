const header=document.querySelector('.header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');

if(header){window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30),{passive:true})}

if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.classList.toggle('active',open);
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    document.body.classList.toggle('menu-open',open)
  });
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.classList.remove('active');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Abrir menu');
    document.body.classList.remove('menu-open')
  }))
}

const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
}),{threshold:.12}):null;
if(observer)document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

/* Mobile-first final polish */
const mobileStyle=document.createElement('style');
mobileStyle.textContent=`
@media(max-width:900px){
 html{scroll-padding-top:72px}
 .header{padding-left:16px;padding-right:16px}
 .brand{max-width:calc(100% - 60px)}
 .menu-toggle{width:48px;height:48px;display:grid;place-content:center;flex:none;cursor:pointer}
 .nav{padding:90px 24px 40px;gap:18px;overflow-y:auto}
 .nav a{min-height:48px;display:flex;align-items:center;justify-content:center;width:min(320px,100%)}
 .nav-cta{margin-top:8px}
 .hero{min-height:100svh;height:auto;padding:110px 18px 52px;align-items:flex-end}
 .hero-content{width:100%}
 .hero h1{font-size:clamp(52px,16vw,78px);letter-spacing:-2.5px;line-height:.86}
 .hero-copy{font-size:16px;line-height:1.45;margin:22px 0}
 .place-pill{font-size:10px;max-width:100%;line-height:1.4}
 .actions{gap:10px}
 .actions .btn{min-height:52px;width:100%}
 .section{padding:72px 18px}
 .about{gap:52px}
 .about-visual img{height:min(105vw,430px)}
 .year{right:8px}
 .section h2{font-size:clamp(42px,12vw,70px);letter-spacing:-3px}
 .section-head{margin-bottom:38px}
 .section-head>p{font-size:14px}
 .burger-grid{display:block}
 .burger-card,.burger-card.featured,.burger-card:nth-child(2){width:100%;margin-bottom:16px}
 .card-photo img,.featured .card-photo img,.burger-card:nth-child(2) .card-photo img{height:min(72vw,310px)}
 .card-body{padding:21px}
 .card-body h3{font-size:22px}
 .special{padding:10px 12px 72px}
 .special-inner{min-height:700px}
 .special-copy{padding:30px 20px}
 .special-copy h2{font-size:clamp(62px,18vw,88px)}
 .special-copy>p:not(.eyebrow){font-size:14px}
 .experience-grid{grid-template-columns:1fr 1fr}
 .experience-grid>div{padding:20px;min-width:0}
 .experience-grid h3{font-size:18px}
 .gallery{padding-top:72px}
 .gallery-title{padding:0 18px 32px;font-size:clamp(38px,11vw,58px);letter-spacing:-3px;gap:12px}
 .mosaic{grid-template-columns:1fr 1fr;grid-template-rows:minmax(230px,60vw) minmax(150px,43vw) minmax(150px,43vw);gap:5px}
 .rating{grid-template-columns:1fr;gap:24px}
 .rating-number{font-size:clamp(105px,31vw,150px)}
 .location{grid-template-columns:1fr}
 .location-info{padding:72px 18px}
 .location h2{font-size:clamp(62px,18vw,88px)}
 .location address{font-size:16px;margin:24px 0}
 .map{min-height:360px}
 .hours-social{grid-template-columns:1fr}
 .hours-list div{gap:14px;font-size:13px}
 .hours-list b{font-size:13px;white-space:nowrap}
 .instagram{padding:34px 20px;min-height:380px}
 .instagram h2{font-size:clamp(34px,10vw,56px)}
 footer{grid-template-columns:1fr;padding:55px 18px 22px;gap:25px}
 .footer-brand{grid-column:auto}
 .copyright{grid-column:1}
 .whatsapp{right:14px;bottom:max(14px,env(safe-area-inset-bottom));width:52px;height:52px;justify-content:center;padding:0}
 .whatsapp svg{width:25px;height:25px}
 .whatsapp span{display:none}
 .btn:focus-visible,.nav a:focus-visible,.menu-toggle:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
 body.menu-open{overflow:hidden}
}
@media(max-width:380px){
 .hero h1{font-size:51px}
 .brand{font-size:10px}
 .brand-mark{width:34px;height:34px;font-size:22px}
 .hero{padding-left:16px;padding-right:16px}
 .section{padding-left:16px;padding-right:16px}
 .experience-grid>div{padding:17px 14px}
 .experience-grid b{font-size:27px}
 .experience-grid h3{font-size:17px}
 .gallery-title{font-size:34px}
}
@media(prefers-reduced-motion:reduce){
 html{scroll-behavior:auto}
 .nav,.btn,.header,.reveal,.burger-card,.burger-card img{transition:none!important}
 .ticker div{animation:none!important}
}
`;
document.head.appendChild(mobileStyle);

/* A TOCA template data */
const TOCA_WA = '5514998081793';
const TOCA_PHONE = '(14) 99808-1793';
const TOCA_ADDRESS = 'R. Prof. Torres Homem, 34';
const TOCA_CITY = 'Boqueirão, Santos - SP';
const TOCA_CEP = '11025-020';
const TOCA_WA_URL = `https://wa.me/${TOCA_WA}`;
const TOCA_MAP_SEARCH = 'https://www.google.com/maps/search/?api=1&query=R.+Prof.+Torres+Homem,+34+-+Boqueirão,+Santos+-+SP,+11025-020';

function adaptToToca(){
  document.title = 'A TOCA | Hamburgueria em Santos — Boqueirão';
  const description = document.querySelector('meta[name="description"]');
  if(description) description.setAttribute('content','A TOCA — hamburgueria no Boqueirão, Santos. Cardápio e pedidos pelo WhatsApp.');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if(ogTitle) ogTitle.setAttribute('content','A TOCA | Hamburgueria em Santos');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if(ogDescription) ogDescription.setAttribute('content','Hamburgueria no Boqueirão, Santos. Faça seu pedido pelo WhatsApp.');

  document.querySelectorAll('.brand').forEach(el=>{
    const spans=el.querySelectorAll('span');
    if(spans.length>=2) spans[1].innerHTML='A TOCA';
    el.setAttribute('aria-label','A TOCA - início');
  });
  document.querySelectorAll('.footer-brand strong').forEach(el=>el.innerHTML='A TOCA');

  const heroEyebrow=document.querySelector('.hero .eyebrow');
  if(heroEyebrow) heroEyebrow.innerHTML='<span></span> Boqueirão · Santos';
  const heroTitle=document.querySelector('.hero h1');
  if(heroTitle) heroTitle.innerHTML='A TOCA';
  const heroCopy=document.querySelector('.hero-copy');
  if(heroCopy) heroCopy.textContent='Lanches, hambúrgueres e clássicos no Boqueirão. Peça pelo WhatsApp.';
  const placePill=document.querySelector('.place-pill');
  if(placePill) placePill.textContent='📍 Boqueirão · Santos';

  document.querySelectorAll('a[href*="wa.me/"]').forEach(a=>{
    const text=a.textContent.trim().toLowerCase();
    let message='Oi! Vim pelo site da A TOCA e gostaria de fazer um pedido.';
    if(text.includes('instagram')) return;
    a.href=`${TOCA_WA_URL}?text=${encodeURIComponent(message)}`;
  });

  const aboutEyebrow=document.querySelector('.about .eyebrow');
  if(aboutEyebrow) aboutEyebrow.innerHTML='<span></span> A TOCA';
  const aboutTitle=document.querySelector('.about h2');
  if(aboutTitle) aboutTitle.innerHTML='NO<br><em>BOQUEIRÃO.</em>';
  const aboutParagraphs=document.querySelectorAll('.about-copy > p');
  if(aboutParagraphs[1]) aboutParagraphs[1].textContent='Uma hamburgueria no Boqueirão, em Santos, com lanches para pedir e aproveitar.';
  if(aboutParagraphs[2]) aboutParagraphs[2].textContent='Consulte o cardápio e faça seu pedido pelo WhatsApp.';

  const locationEyebrow=document.querySelector('.location .eyebrow');
  if(locationEyebrow) locationEyebrow.innerHTML='<span></span> Onde estamos';
  const locationTitle=document.querySelector('.location h2');
  if(locationTitle) locationTitle.innerHTML='VEM PRA<br><em>A TOCA.</em>';
  const address=document.querySelector('.location address');
  if(address) address.innerHTML=`${TOCA_ADDRESS}<br>${TOCA_CITY}<br>${TOCA_CEP}`;
  const map=document.querySelector('.map iframe');
  if(map){
    map.title='Mapa da A TOCA';
    map.src='https://www.google.com/maps?q=R.%20Prof.%20Torres%20Homem%2C%2034%20-%20Boqueir%C3%A3o%2C%20Santos%20-%20SP%2C%2011025-020&output=embed';
  }
  const mapsLink=document.querySelector('.location .btn.primary');
  if(mapsLink) mapsLink.href=TOCA_MAP_SEARCH;

  const footerCols=document.querySelectorAll('footer > div');
  if(footerCols[3]){
    const p=footerCols[3].querySelector('p');
    if(p) p.innerHTML=`${TOCA_ADDRESS}<br>${TOCA_CITY}`;
  }
  const footerContact=Array.from(document.querySelectorAll('footer a')).find(a=>a.textContent.trim()==='WhatsApp');
  if(footerContact) footerContact.href=TOCA_WA_URL;
  const copyright=document.querySelector('.copyright');
  if(copyright) copyright.innerHTML='© <span id="year"></span> A TOCA. Todos os direitos reservados.';
  const year2=document.getElementById('year');
  if(year2) year2.textContent=new Date().getFullYear();

  const schema=document.querySelector('script[type="application/ld+json"]');
  if(schema){
    schema.textContent=JSON.stringify({
      '@context':'https://schema.org',
      '@type':'Restaurant',
      name:'A TOCA',
      servesCuisine:'Hamburgueria',
      telephone:'+55 14 99808-1793',
      address:{'@type':'PostalAddress',streetAddress:TOCA_ADDRESS,addressLocality:'Santos',addressRegion:'SP',postalCode:TOCA_CEP,addressCountry:'BR'}
    });
  }
}

document.addEventListener('DOMContentLoaded',adaptToToca);