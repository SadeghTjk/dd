<template>
  <div class="grid place-items-center">
    <h2 class="py-14 text-center text-purple-300 font-black text-lg md:text-3xl md:py-20 md:pb-28 lg:text-4xl font-montserrat" data-aos="example-anim1">What Do We Do in the Shadows?!</h2>
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-y-28 place-items-center">
        <nuxt-link to="/web">
      <div class="box" data-aos="fade-right">
        <span></span>
        <img class="skill_img" src="/img/icons/skill_programming.svg" />
        <h3>Website</h3>
        <p>small and cheap? wordpress
          advanced and fast? vue/nuxt
        </p>
        <button block variant="outline-secondary">more...</button>
      </div>
        </nuxt-link>
      <div class="box" data-aos="zoom-in-down">
        <span></span>
        <img class="skill_img" src="/img/icons/skill_instagram.svg" />
        <h3>Instagram</h3>
        <p>post, template, story
          we create them all
        </p>
        <button block variant="outline-secondary">more...</button>
      </div>
      <div class="box" data-aos="fade-left">
        <span></span>
                <img class="skill_img" src="/img/icons/skill_banner.svg" />
        <h3>Banners</h3>
        <p>Header, Footer, SlideShow,
          Ad, product and...
        </p>
        <button block variant="outline-secondary">more...</button>
      </div>
    
      <div class="box" data-aos="fade-right">
        <span></span>
      </div>
      <div class="box" data-aos="zoom-in-up">
        <span></span>
      </div>
      <div class="box" data-aos="fade-left">
        <span></span>
      </div>
      </div>
  </div>
</template>
<script>

export default {

}
</script>
<style scoped>
*{
    box-sizing: border-box;
}
img.skill_img {
    z-index: 11;
    width: 60px;
    height: 60px;
    position: absolute;
    filter: invert(19%) sepia(100%) saturate(3183%) hue-rotate(289deg) brightness(84%) contrast(120%);
    top: 24px;
}
.box{
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:250px;
    height: 280px;
    text-align: center;
    font-family: 'Quicksand',sans-serif;
    cursor: pointer;
}
.box::before{
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 8px;
    transform: skewX(4deg) skewY(6deg);
    -webkit-transform: skewX(4deg) skewY(6deg);
    background: linear-gradient(315deg, #00ccff, #0e1538,#d400d4);
    
}
.box::after{
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 8px;
    transform: skewX(4deg) skewY(6deg);
    -webkit-transform: skewX(4deg) skewY(6deg);
    background: linear-gradient(315deg, #00ccff, #0e1538,#d400d4);
    filter: blur(50px);
    
}
.box:hover::before{
    animation: animate 0.5s linear infinite alternate;
}
@keyframes animate{
    0%{
        transform: skewX(4deg) skewY(6deg);
    }
    100%{
        transform: skewX(6deg) skewY(4deg);
    }
}
.box span{
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background: #050017;
    border-radius: 8px;
    z-index: 10;
}
.box h3{
    position: relative;
    color: #c104c3;
    z-index: 11;
    font-size: 32px;
    font-weight: 600;
}
.box p{
    position: relative;
    color: #fff;
    z-index: 11;
    white-space: pre-line;
}

</style>