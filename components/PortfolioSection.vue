<template>
  <b-container>
              <div class="portfolio_container">
                  <div v-for="(p,i) in data.portfolio" :key="i" class="portfolio_card">
                      <div class="portfolio_imgBx">
                          <img src="/img/portfolio/iltecor-screenshot.jpg" alt="danteh">
                      </div>
                      <div class="portfolio_content">
                          <h3>iltecor website</h3>
                          <p>we designed this!</p>
                      </div>
                  </div>
              
          <div class="portfolio_card">
                      <div class="portfolio_imgBx">
                          <img src="/img/portfolio/iltecor-screenshot.jpg" alt="danteh">
                      </div>
                      <div class="portfolio_content">
                          <h3>iltecor website</h3>
                          <p>we designed this!</p>
                      </div>
                  </div>
              <div class="portfolio_card">
                      <div class="portfolio_imgBx">
                          <img src="/img/portfolio/iltecor-screenshot.jpg" alt="danteh">
                      </div>
                      <div class="portfolio_content">
                          <h3>iltecor website</h3>
                          <p>we designed this!</p>
                      </div>
                  </div>
                  </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  async mounted(){
    // await this.$axios.$get('https://danteh.net/api').then(res =>{
    //     if(res.portfolio)
    //         this.data = res
    //     console.log(res)
    // })
  },
  methods:{
  }
}
</script>
<style scoped>
.portfolio_container{
    position: relative;
    width: 1100px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
}
.portfolio_container .portfolio_card{
    position: relative;
    max-width: 300px;
    height: 175px;
    background: linear-gradient(1deg, #99ccff, #9999ff);;
    margin: 40px 20px;
    padding: 20px 15px;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgb(153 204 255);
    transition: 0.3s ease-in-out;
}
.portfolio_container .portfolio_card:hover {
    height: 280px;
}
.portfolio_container .portfolio_card .portfolio_imgBx{
    position: relative;
    width: 260px;
    height: 170px;
    top: -60px;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 1;
    background-color: white;
}
.portfolio_container .portfolio_card .portfolio_imgBx img{
    max-width: 100%;
    /* width: 100%; */
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
}
.portfolio_container .portfolio_card .portfolio_content{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    color: #050017;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}
.portfolio_container .portfolio_card:hover .portfolio_content{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.2s;
}
</style>
