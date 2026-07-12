/* =====================================================
   PRODUCT DATA — real Jiji Kicks assets (assets/images/)
===================================================== */
const IMG = (name) => `assets/images/${name}`;

const PRODUCTS = [
  { name:"Air Jordan 4 Retro", price:"KSh 14,500", sizes:["40","41","42","43","44"], img:IMG("air-jordan-4-black-white.jpg") },
  { name:"Air Jordan 1 High Bred", price:"KSh 13,800", sizes:["40","41","42","43"], img:IMG("air-jordan-1-bred.jpg") },
  { name:"Air Jordan 1 Mocha", price:"KSh 15,200", sizes:["41","42","43","44"], img:IMG("air-jordan-1-mocha.jpg") },
  { name:"Adidas Samba OG", price:"KSh 8,500", sizes:["39","40","41","42","43"], img:IMG("adidas-samba-white-black.jpg") },
  { name:"Adidas Forum Low", price:"KSh 9,200", sizes:["38","39","40","41"], img:IMG("adidas-forum-green.jpg") },
  { name:"Versace Medusa Loafer", price:"KSh 22,000", sizes:["40","41","42","43"], img:IMG("versace-loafer-black-gold.jpg") },
];

const ARRIVALS = [
  { name:"Converse Chuck Taylor '70", img:IMG("converse-chuck-taylor-black.jpg") },
  { name:"Storm Runner", img:IMG("sneaker-white-blue-sport.jpg") },
  { name:"Golden Trail", img:IMG("sneaker-white-gold-sport.jpg") },
  { name:"Navy Suede Loafer", img:IMG("loafer-navy-suede.jpg") },
  { name:"Tassel Brown Loafer", img:IMG("loafer-brown-tassel.jpg") },
];

const INSTAGRAM_IMAGES = [
  IMG("air-jordan-1-bred.jpg"),
  IMG("adidas-samba-white-black.jpg"),
  IMG("loafer-grey-suede-onfoot.jpg"),
  IMG("sneaker-white-gold-sport.jpg"),
  IMG("versace-loafer-black-gold.jpg"),
  IMG("converse-chuck-taylor-black.jpg"),
  IMG("air-jordan-4-black-white.jpg"),
  IMG("sneaker-white-blue-sport.jpg"),
  IMG("adidas-forum-green.jpg"),
];

const wa = (name) => `https://wa.me/254700000000?text=${encodeURIComponent(`Hi Jiji Kicks, I'd like to order the ${name}`)}`;

/* Render product cards */
const collectionGrid = document.getElementById('collectionGrid');
PRODUCTS.forEach((p) => {
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <div class="product-media">
      <img src="${p.img}" alt="${p.name} sneaker" loading="lazy">
      <span class="product-tag">New</span>
    </div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="product-price">${p.price}</div>
      <div class="sizes">${p.sizes.map(s=>`<span class="size">${s}</span>`).join('')}</div>
      <a class="whatsapp-btn" href="${wa(p.name)}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 12a8 8 0 1 1-3.6-6.7"/><path d="M20 4l-7 7"/></svg>
        Order via WhatsApp
      </a>
    </div>`;
  collectionGrid.appendChild(card);
});

/* Render arrivals */
const arrivalsTrack = document.getElementById('arrivalsTrack');
ARRIVALS.forEach((a) => {
  const card = document.createElement('div');
  card.className = 'arrival-card';
  card.innerHTML = `
    <img src="${a.img}" alt="${a.name}" loading="lazy">
    <div class="arrival-label">
      <div class="eyebrow">Just In</div>
      <h3>${a.name}</h3>
    </div>`;
  arrivalsTrack.appendChild(card);
});
document.getElementById('arrowLeft').onclick = () => arrivalsTrack.scrollBy({left:-340, behavior:'smooth'});
document.getElementById('arrowRight').onclick = () => arrivalsTrack.scrollBy({left:340, behavior:'smooth'});

/* Drag-to-scroll for New Arrivals */
(function enableDragScroll(el){
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  window.addEventListener('mouseup', () => isDown = false);
  el.addEventListener('mouseleave', () => isDown = false);
  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
})(arrivalsTrack);

/* Render instagram masonry */
const instaGrid = document.getElementById('instaGrid');
const INSTA_HEIGHTS = [280,340,260,320,300,250,360,290,270];
INSTAGRAM_IMAGES.forEach((src, i) => {
  const item = document.createElement('div');
  item.className = 'insta-item';
  item.innerHTML = `
    <img src="${src}" style="height:${INSTA_HEIGHTS[i % INSTA_HEIGHTS.length]}px;" alt="Jiji Kicks customer photo" loading="lazy">
    <div class="insta-overlay"><span>View Product</span></div>`;
  instaGrid.appendChild(item);
});

/* Testimonials */
const TESTIMONIALS = [
  { name:"Brian K.", loc:"Nairobi", text:"Ordered on WhatsApp in the evening, kicks arrived the next day. 100% authentic, exactly as pictured." },
  { name:"Faith W.", loc:"Eldoret", text:"Best prices I've found for real pairs. Jiji Kicks is now my go-to before any new drop." },
  { name:"Dennis O.", loc:"Kitale", text:"Fast delivery to Kitale, sizing was spot on, and the customer service actually replies fast." },
  { name:"Cynthia M.", loc:"Nakuru", text:"I was skeptical about buying sneakers online but these guys are legit. Will be ordering again." },
  { name:"Kevin T.", loc:"Kisumu", text:"The New Arrivals drop I wanted sold out everywhere else — Jiji Kicks still had my size." },
];
const testiTrack = document.getElementById('testiTrack');
const testiDots = document.getElementById('testiDots');
TESTIMONIALS.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'testi-card';
  card.innerHTML = `
    <div class="stars">★★★★★</div>
    <p class="testi-quote">${t.text}</p>
    <div class="testi-person">
      <div class="avatar">${t.name.split(' ').map(n=>n[0]).join('')}</div>
      <div>
        <div class="name">${t.name}</div>
        <div class="loc">${t.loc}</div>
      </div>
    </div>`;
  testiTrack.appendChild(card);

  const dot = document.createElement('div');
  dot.className = 'testi-dot' + (i===0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  testiDots.appendChild(dot);
});

let testiIndex = 0;
function getSlideWidth(){
  const card = testiTrack.querySelector('.testi-card');
  const gap = 22.4;
  return card ? card.getBoundingClientRect().width + gap : 0;
}
function goToSlide(i){
  testiIndex = i;
  testiTrack.style.transform = `translateX(-${getSlideWidth() * i}px)`;
  [...testiDots.children].forEach((d, idx) => d.classList.toggle('active', idx === i));
}
let testiAuto = setInterval(() => {
  testiIndex = (testiIndex + 1) % TESTIMONIALS.length;
  goToSlide(testiIndex);
}, 4500);
testiTrack.addEventListener('mouseenter', () => clearInterval(testiAuto));
window.addEventListener('resize', () => goToSlide(testiIndex));

/* =====================================================
   LOADER
===================================================== */
let pct = 0;
const loaderFill = document.getElementById('loaderFill');
const loaderPct = document.getElementById('loaderPct');
const loaderInterval = setInterval(() => {
  pct += Math.random() * 18;
  if (pct >= 100) pct = 100;
  loaderFill.style.width = pct + '%';
  loaderPct.textContent = Math.floor(pct) + '%';
  if (pct >= 100) {
    clearInterval(loaderInterval);
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 350);
  }
}, 140);

/* =====================================================
   CUSTOM CURSOR
===================================================== */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top = my + 'px';

  const spotlight = document.getElementById('heroSpotlight');
  const heroRect = document.querySelector('.hero').getBoundingClientRect();
  if (e.clientY < heroRect.bottom) {
    spotlight.style.setProperty('--mx', (mx - heroRect.left) + 'px');
    spotlight.style.setProperty('--my', (my - heroRect.top) + 'px');
  }
});
(function animateRing(){
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();
function bindCursorTargets(){
  document.querySelectorAll('a, button, .product-card, .why-card, .insta-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('active'));
  });
}
bindCursorTargets();

/* =====================================================
   SCROLL PROGRESS + STRIDE LINE + NAVBAR
===================================================== */
const scrollProgress = document.getElementById('scroll-progress');
const strideFill = document.getElementById('strideFill');
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
  strideFill.style.height = scrolled + '%';
  header.classList.toggle('scrolled', h.scrollTop > 40);
});

/* =====================================================
   MOBILE MENU
===================================================== */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burgerBtn.classList.remove('active');
  mobileMenu.classList.remove('open');
}));

/* =====================================================
   HERO PARALLAX
===================================================== */
const heroContent = document.querySelector('.hero-content');
const heroVideo = document.getElementById('heroVideo');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroContent.style.transform = `translateY(${y * 0.25}px)`;
    heroContent.style.opacity = String(Math.max(0, 1 - y / 500));
    if (heroVideo) heroVideo.style.transform = `scale(1.06) translateY(${y * 0.12}px)`;
  }
});

/* Hero video graceful fallback if the source is missing or fails to play */
heroVideo.addEventListener('error', () => heroVideo.classList.add('hidden-media'), true);
const heroSource = heroVideo.querySelector('source');
if (heroSource) heroSource.addEventListener('error', () => heroVideo.classList.add('hidden-media'));
setTimeout(() => { if (heroVideo.readyState === 0) heroVideo.classList.add('hidden-media'); }, 1500);

/* =====================================================
   INTERSECTION OBSERVER REVEALS
===================================================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .why-card, .product-card').forEach(el => observer.observe(el));

/* =====================================================
   FLOATING PARTICLES (canvas)
===================================================== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}
function initParticles(){
  const count = window.innerWidth < 700 ? 24 : 46;
  particles = Array.from({length: count}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    vy: Math.random() * 0.25 + 0.05,
    vx: (Math.random() - 0.5) * 0.15,
    o: Math.random() * 0.5 + 0.1
  }));
}
resizeCanvas(); initParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

function drawParticles(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y -= p.vy;
    p.x += p.vx;
    if (p.y < 0) p.y = canvas.height;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${p.o})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
