<template> 
<!-- maybe image height for mobile: h-[calc(100vh-4.75rem) -->
  <div>
    <!-- <b-img class="hero" fluid center src="img/main_background.jpg" /> -->
    <div class="welcome grid grid-cols-2 grid-rows-4">
      <div id="shoebox" class="shoebox flex justify-center items-center bg-white relative row-start-1 row-end-5 col-start-2 col-end-3">
        <div class="hero-shape">
            <div class="bc absolute"></div>
            <div class="mc absolute" ></div>
            <div class="lc absolute"></div>
        </div>
        
        <div class="hero-blend w-full h-full grid place-content-center font-montserrat text-center text-8xl font-bold">
            <p class="title">We Make Your Dreams</p>
            <p class="title">Come True!</p>
        </div>
        <div id="reverse"></div>
      </div>
    </div>
    <skills-section id="skills"></skills-section>
    <!-- <portfolio-section class="section" id="portfolio"></portfolio-section> -->
    
    <button class="to_top z-50" @click="toTop()">
      <img width="22" height="22" src="/img/icons/arrow-up-outline.svg" alt="go to top" />
    </button>
    <!-- </div> -->
  </div>
</template>

<script>
import AOS from 'aos'

if(typeof window !== 'undefined'){

    const box = document.querySelector(".shoebox");

    const bc = document.querySelector(".bc");
    const mc = document.querySelector(".mc");
    const lc = document.querySelector(".lc");
    const boxrect = box.getBoundingClientRect();
    const brect = bc.getBoundingClientRect().width/2;
    const mrect = mc.getBoundingClientRect().width/2;
    const lrect = lc.getBoundingClientRect().width/2;
    // bc.style.transitionTimingFunction= 'cubic-bezier(0, 0.49, 1, 1)';
    // mc.style.transitionTimingFunction= 'cubic-bezier(0, 0.49, 1, 1)';
    // lc.style.transitionTimingFunction= 'cubic-bezier(0, 0.49, 1, 1)';
    // box.addEventListener('mousemove', (e) => {
    //     setTimeout(() => {
    //         bc.style.transform = `translate3d(${e.clientX - brect }px,${e.layerY - brect }px,0px)`
    //     }, 280);
    //     setTimeout(() => {
    //         mc.style.transform = `translate3d(${e.clientX - mrect }px,${e.layerY - mrect }px,0px)`
    //     }, 240);
    //     setTimeout(() => {
    //         lc.style.transform = `translate3d(${e.clientX - lrect }px,${e.layerY - lrect }px,0px)`
    //     }, 200);
    // })

    ////////////////////////////////////////////////////// GSAP

    gsap.set(bc, {xPercent: -50, yPercent: -50});
    gsap.set(mc, {xPercent: -50, yPercent: -50});
    gsap.set(lc, {xPercent: -50, yPercent: -50});

    const pos = { bx: boxrect.width/2, by: boxrect.height/2, mx:boxrect.width/2, my:boxrect.height/2, lx: boxrect.width/2, ly: boxrect.height/2};
    const mouse = { bx: pos.bx, by: pos.by, mx: pos.mx, my: pos.my, lx: pos.lx, ly: pos.ly};
    const speed = 0.2;

    const bxSet = gsap.quickTo(bc, "x", {duration: 0.6, ease: "power3"});
    const bySet = gsap.quickTo(bc, "y", {duration: 0.6, ease: "power3"});
    
    const mxSet = gsap.quickTo(mc, "x", {duration: 0.5, ease: "power3"});
    const mySet = gsap.quickTo(mc, "y", {duration: 0.5, ease: "power3"});

    const lxSet = gsap.quickTo(lc, "x", {duration: 0.3, ease: "power3"});
    const lySet = gsap.quickTo(lc, "y", {duration: 0.3, ease: "power3"});

    box.addEventListener("mousemove", e => {    
      mouse.bx = e.layerX;
      mouse.mx = e.layerX;
      mouse.lx = e.layerX;
      mouse.by = e.layerY  ;  
      mouse.my = e.layerY ; 
      mouse.ly = e.layerY ; 
    });

    gsap.ticker.add(() => {
      
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      
      pos.bx += (mouse.bx - pos.bx) * dt;
      pos.by += (mouse.by - pos.by) * dt;

      pos.mx += (mouse.mx - pos.mx) * dt;
      pos.my += (mouse.my - pos.my) * dt;
      
      pos.lx += (mouse.lx - pos.lx) * dt;
      pos.ly += (mouse.ly - pos.ly) * dt;

      bxSet(pos.bx);
      bySet(pos.by);

      mxSet(pos.mx);
      mySet(pos.my);

      lxSet(pos.lx);
      lySet(pos.ly);
    });
    
  }

export default {
  name: 'HomePage',
  mounted(){
    AOS.init({
      offset: 120,
      once: false,
      duration: 700,
      easing: 'ease-in-out',
      mirror: false, // whether elements should animate out while scrolling past them
      //anchorPlacement: 'center-bottom',
    });
    function random(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const icons = ['/img/icons/dot.svg','/img/icons/wp-icon.png','/img/icons/ux-design.png','/img/icons/js-icon.png','/img/icons/insta-logo.webp']
    var dropletQuantity = 14;
    let droplet = document.createElement("div");
    document.getElementById('shoebox').appendChild(droplet);
    for (var i = dropletQuantity - 1; i >= 0; i--) {
    
    var pos = Math.floor((Math.random() * 100) + 1);
    var delay = Math.random();
    var speed = (Math.random() * 10) +1;
    
    droplet = document.createElement("div");
    droplet.className = "droplet";
    droplet.style.setProperty('--bg', `url(${icons[random(0,4)]})`) ;
    droplet.style.left = pos + "%";
    
    gsap.from(droplet, speed, { y :1500, delay : delay, repeat:-1});
    
    document.getElementById('reverse').appendChild(droplet);
  }
  },
  methods:{
        toTop(){
            document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
  },
  head:{
    script:[{src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js'}]
  }
}
</script>
<style>
@import '../node_modules/aos/dist/aos.css';
:root{
  --bg: url('/img/danteh-logo.png');
}
#reverse{
  position: absolute;
  width: 100%;
  height: 102%;
  z-index: 99;
  top: -12px;
  overflow: hidden;
}
.droplet{
  position: absolute;
  top: -10%;
  height:20px !important;
  width:10px !important;
  pointer-events: none;
}
.droplet::after{
  content: '';
  background: var(--bg);
  background-size: cover;
  width: 50px;
  height: 50px;
  opacity: .8;
  position: absolute;
  top: 0;
  left: 0;
}
.welcome{
  position: relative;
  height: calc(100vh - 100px);
  background-color: var(--body-bg);
  background-image: url('/img/main_background.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  /* background-position:center ; */
}

.dream{
  position: absolute;
  /* color: #9241ff; */
  color: white;
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 22px;
  top: 30%;
  left: 50%;
  transform: translate(-10%, -50%);
}
@media only screen and (min-width: 1025px) {
  .dream{
    font-size: 40px;
    top: 44%;
  }
}
.to_top{
  position: fixed;
  display: grid;
  place-content: center;
  bottom: 16px;
  right: 16px;
  height: 49px;
  width: 49px;
  background: #5338ff;
  border-radius: 100%;
  border: 0;
}
.to_top img{
  filter: invert(1);
}
.to_top:active, .to_top:hover {
    box-shadow: 0 0 20px 10px #5338ff99 !important;
    border: 0 ;
    background-color: #5338ff !important;
}
.to_top:focus{
  box-shadow: none;
  border: 0 ;
  background-color: #5338ff;
}

.hero-blend{
    color: #fff;
    mix-blend-mode: multiply;
    transform: translateZ(0px);
    /* background: rgb(255, 255, 255); */
    position: relative;
    z-index: 1;
    backface-visibility: hidden;
}
.hero-blend::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--body-bg);
}
.hero-shape {
    position: absolute;
    display: block;
    contain: strict;
    backface-visibility: hidden;
    inset: 0;
    overflow: hidden;
    background: darkviolet;
}
  .title{
    text-rendering: optimizeSpeed;
  }
  .bc{
    width: 500px;
    height: 500px;
    border-radius:50% ;
    top: 0;
    left: 0;
    /* background: rgb(0, 95, 254); */
    background: #ed70f3;
    will-change: transform;
    opacity: 0;
    transition: opacity 500ms;
  }
  .mc{
    width: 350px;
    height: 350px;
    border-radius:50% ;
    background: rgb(255, 229, 227);
    top: 0;
    left: 0;
    will-change: transform;
    opacity: 0;
    transition: opacity 500ms;
  }
  .lc{
    width: 200px;
    height: 200px;
    border-radius:50% ;
    /* background: rgb(255, 204, 87); */
    background: rgb(51 88 223);;
    top: 0;
    left: 0;
    will-change: transform;
    opacity: 0;
    transition: opacity 500ms;
  }
  .shoebox:hover .hero-shape > * {
    opacity: 1;
    transition: opacity 500ms;
    transform-origin: center;
  }
</style>
