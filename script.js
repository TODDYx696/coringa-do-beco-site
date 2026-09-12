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