const header = document.querySelector('.header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.classList.toggle('active', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.classList.remove('active');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Abrir menu');
      document.body.classList.remove('menu-open');
    });
  });
}

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

if (observer) {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* Mobile polish */
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
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
  .actions{gap:10px}.actions .btn{min-height:52px;width:100%}
  .section{padding:72px 18px}.about{gap:52px}
  .about-visual img{height:min(105vw,430px)}.year{right:8px}
  .section h2{font-size:clamp(42px,12vw,70px);letter-spacing:-3px}.section-head{margin-bottom:38px}.section-head>p{font-size:14px}
  .burger-grid{display:block}.burger-card,.burger-card.featured,.burger-card:nth-child(2){width:100%;margin-bottom:16px}
  .card-photo img,.featured .card-photo img,.burger-card:nth-child(2) .card-photo img{height:min(72vw,310px)}
  .card-body{padding:21px}.card-body h3{font-size:22px}
  .special{padding:10px 12px 72px}.special-inner{min-height:700px}.special-copy{padding:30px 20px}.special-copy h2{font-size:clamp(62px,18vw,88px)}.special-copy>p:not(.eyebrow){font-size:14px}
  .experience-grid{grid-template-columns:1fr 1fr}.experience-grid>div{padding:20px;min-width:0}.experience-grid h3{font-size:18px}
  .gallery{padding-top:72px}.gallery-title{padding:0 18px 32px;font-size:clamp(38px,11vw,58px);letter-spacing:-3px;gap:12px}
  .mosaic{grid-template-columns:1fr 1fr;grid-template-rows:minmax(230px,60vw) minmax(150px,43vw) minmax(150px,43vw);gap:5px}
  .rating{grid-template-columns:1fr;gap:24px}.rating-number{font-size:clamp(105px,31vw,150px)}
  .location{grid-template-columns:1fr}.location-info{padding:72px 18px}.location h2{font-size:clamp(62px,18vw,88px)}.location address{font-size:16px;margin:24px 0}.map{min-height:360px}
  .hours-social{grid-template-columns:1fr}.hours-list div{gap:14px;font-size:13px}.hours-list b{font-size:13px;white-space:nowrap}
  .instagram{padding:34px 20px;min-height:380px}.instagram h2{font-size:clamp(34px,10vw,56px)}
  footer{grid-template-columns:1fr;padding:55px 18px 22px;gap:25px}.footer-brand{grid-column:auto}.copyright{grid-column:1}
  .whatsapp{right:14px;bottom:max(14px,env(safe-area-inset-bottom));width:52px;height:52px;justify-content:center;padding:0}.whatsapp svg{width:25px;height:25px}.whatsapp span{display:none}
  .btn:focus-visible,.nav a:focus-visible,.menu-toggle:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
  body.menu-open{overflow:hidden}
}
@media(max-width:380px){
  .hero h1{font-size:51px}.brand{font-size:10px}.brand-mark{width:34px;height:34px;font-size:22px}
  .hero{padding-left:16px;padding-right:16px}.section{padding-left:16px;padding-right:16px}
  .experience-grid>div{padding:17px 14px}.experience-grid b{font-size:27px}.experience-grid h3{font-size:17px}.gallery-title{font-size:34px}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.nav,.btn,.header,.reveal,.burger-card,.burger-card img{transition:none!important}.ticker div{animation:none!important}}

/* Premium 3D burger intro */
.burger-intro{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:radial-gradient(circle at 50% 45%,#202026 0,#09090b 48%,#030304 100%);overflow:hidden;perspective:1200px;animation:introOut .7s cubic-bezier(.7,0,.2,1) 3.6s forwards}
.burger-intro::before{content:'';position:absolute;width:min(72vw,520px);height:min(72vw,520px);border-radius:50%;background:radial-gradient(circle,rgba(241,43,47,.22),transparent 65%);filter:blur(8px);animation:glowPulse 2.4s ease-in-out infinite}
.intro-scene{position:relative;width:min(430px,88vw);height:430px;display:grid;place-items:center;transform-style:preserve-3d}
.intro-burger-3d{position:relative;width:min(330px,72vw);height:210px;transform-style:preserve-3d;animation:burgerEntrance 1.35s cubic-bezier(.16,1,.3,1) .25s both,burgerFloat 2.4s ease-in-out 1.6s infinite;filter:drop-shadow(0 35px 22px rgba(0,0,0,.65))}
.intro-layer{position:absolute;left:50%;transform:translateX(-50%);transform-style:preserve-3d}
.intro-top-bun{top:5px;width:100%;height:92px;border-radius:50% 50% 35% 35% / 75% 75% 30% 30%;background:radial-gradient(circle at 32% 24%,#f2bd6a 0 3%,transparent 4%),radial-gradient(circle at 65% 30%,#d98a35 0 2%,transparent 3%),linear-gradient(145deg,#f6c978,#b95f21 72%);box-shadow:inset 0 -15px 18px rgba(88,37,11,.28),inset 0 8px 10px rgba(255,235,175,.3);transform-origin:center bottom;animation:bunTilt 2s ease-in-out 1.8s infinite}
.intro-lettuce{top:82px;width:94%;height:19px;background:linear-gradient(#9ac23c,#4e791c);border-radius:48% 55% 45% 50%;box-shadow:0 4px 5px rgba(0,0,0,.3);transform:translateX(-50%) translateZ(5px)}
.intro-cheese{top:94px;width:88%;height:23px;background:linear-gradient(130deg,#ffe56a,#e2a91d);clip-path:polygon(0 0,100% 5%,94% 100%,72% 65%,52% 100%,30% 68%,10% 100%);transform:translateX(-50%) translateZ(8px)}
.intro-patty{top:105px;width:91%;height:48px;border-radius:22px;background:radial-gradient(circle at 25% 35%,#6b3826 0 2%,transparent 3%),radial-gradient(circle at 70% 55%,#160b08 0 3%,transparent 4%),linear-gradient(180deg,#54281c,#1b0e0b);box-shadow:inset 0 7px 8px rgba(255,154,88,.12),0 8px 12px rgba(0,0,0,.55);transform:translateX(-50%) translateZ(3px)}
.intro-sauce{top:144px;width:78%;height:10px;border-radius:50%;background:#f2c14b;box-shadow:0 3px 5px rgba(0,0,0,.4);transform:translateX(-50%) translateZ(9px)}
.intro-bottom-bun{top:151px;width:91%;height:50px;border-radius:18% 18% 48% 48% / 20% 20% 70% 70%;background:linear-gradient(145deg,#e9a64d,#a9531e);box-shadow:inset 0 9px 12px rgba(255,222,157,.18),inset 0 -10px 13px rgba(73,27,8,.25);transform:translateX(-50%) translateZ(0)}
.intro-shine{position:absolute;left:50%;top:55px;width:65%;height:16px;border-radius:50%;background:rgba(255,255,255,.18);filter:blur(8px);transform:translateX(-50%) translateZ(25px) rotate(-8deg);animation:shineMove 2.2s ease-in-out 1.7s infinite}
.intro-particle{position:absolute;width:4px;height:4px;border-radius:50%;background:#f1eadc;box-shadow:0 0 12px rgba(241,234,220,.7);opacity:0}
.intro-p1{left:8%;top:28%;animation:particle 2.2s ease-out .7s infinite}.intro-p2{right:10%;top:40%;animation:particle 2.5s ease-out 1s infinite}.intro-p3{left:18%;bottom:28%;animation:particle 2.1s ease-out 1.2s infinite}.intro-p4{right:20%;bottom:22%;animation:particle 2.7s ease-out .9s infinite}
.intro-brand{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);font:700 12px/1 var(--display);letter-spacing:4px;color:#f1eadc;white-space:nowrap;opacity:0;animation:brandIn .7s ease 1.45s forwards}
.intro-brand::after{content:'HAMBURGUERIA · BECO DO BATMAN';display:block;margin-top:9px;font:500 7px/1 var(--body);letter-spacing:2px;text-align:center;color:#a4a0a0}
@keyframes burgerEntrance{0%{opacity:0;transform:translateY(130px) rotateX(70deg) rotateY(-45deg) scale(.55)}55%{opacity:1}100%{transform:translateY(0) rotateX(0) rotateY(0) scale(1)}}
@keyframes burgerFloat{0%,100%{transform:translateY(0) rotateY(-5deg) rotateX(2deg)}50%{transform:translateY(-12px) rotateY(5deg) rotateX(-2deg)}}
@keyframes bunTilt{0%,100%{transform:translateX(-50%) rotateZ(0)}50%{transform:translateX(-50%) rotateZ(-1.5deg)}}
@keyframes shineMove{0%,100%{opacity:.15;transform:translateX(-70%) translateZ(25px) rotate(-8deg)}50%{opacity:.4;transform:translateX(-25%) translateZ(25px) rotate(-8deg)}}
@keyframes glowPulse{0%,100%{transform:scale(.85);opacity:.65}50%{transform:scale(1.12);opacity:1}}
@keyframes particle{0%{opacity:0;transform:translate3d(0,20px,0) scale(.5)}25%{opacity:.8}100%{opacity:0;transform:translate3d(18px,-65px,40px) scale(1.2)}}
@keyframes brandIn{to{opacity:1;transform:translateX(-50%) translateY(0)}}
@keyframes introOut{to{opacity:0;visibility:hidden;pointer-events:none;transform:scale(1.04)}}
@media(max-width:480px){.intro-scene{height:360px}.intro-burger-3d{width:280px;height:190px}.intro-brand{bottom:18px;font-size:10px;letter-spacing:3px}.intro-brand::after{font-size:6px}}
@media(prefers-reduced-motion:reduce){.burger-intro{display:none!important}}
`;
document.head.appendChild(mobileStyle);

/* The intro uses only CSS: no external images, keys, or user input. */
const intro = document.createElement('div');
intro.className = 'burger-intro';
intro.setAttribute('aria-hidden', 'true');
intro.innerHTML = `
  <div class="intro-scene">
    <div class="intro-burger-3d">
      <div class="intro-layer intro-top-bun"></div>
      <div class="intro-layer intro-lettuce"></div>
      <div class="intro-layer intro-cheese"></div>
      <div class="intro-layer intro-patty"></div>
      <div class="intro-layer intro-sauce"></div>
      <div class="intro-layer intro-bottom-bun"></div>
      <div class="intro-shine"></div>
    </div>
    <i class="intro-particle intro-p1"></i><i class="intro-particle intro-p2"></i>
    <i class="intro-particle intro-p3"></i><i class="intro-particle intro-p4"></i>
    <div class="intro-brand">CORINGA DO BECO</div>
  </div>
`;
document.body.prepend(intro);
setTimeout(() => intro.remove(), 4500);
