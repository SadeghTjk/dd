<template>
  <div class="">
    <!-- <b-navbar sticky toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand to="/?ref=logo">
          <b-row align="center">
            <img class="ml-5" src="/img/danteh-logo.png" height="70" width="70" />
            <span>anteh</span>
          </b-row>
        </b-navbar-brand>
        <b-navbar-toggle class="border-0" target="nav-collapse">
          <template v-slot:default>
            <b-img src="img/hamenu.svg" />
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav justified>
            <b-nav-item><nuxt-link @click.prevent="scrollInto('skills')" :to="{path: '/',hash:'skills'}"> Skills </nuxt-link></b-nav-item>
            <b-nav-item><nuxt-link @click.prevent="scrollInto('portfolio')" :to="{path: '/',hash:'portfolio'}"> Portfolio </nuxt-link></b-nav-item>
            <b-nav-item :to="{path: '/',hash:'about'}">About</b-nav-item>
            <b-nav-item href="#">Order</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-button @click="popup()" pill class="header_btn">
              <b-img class="ion-icon" src="img/icons/bars-progress.svg" /> Track Order</b-button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar> -->

    <templateNavbar />

    <Nuxt />

    <!-- <div class="danteh_footer">
      <footer>
      <ul class="footer_socials">
        <li style="--clr:#1877f2;"><nuxt-link to="/"><i class="fa-brands fa-facebook-f"></i></nuxt-link></li>
        <li style="--clr:#ff0000;"><nuxt-link to="/"><i class="fa-brands fa-youtube"></i></nuxt-link></li>
        <li style="--clr:#1da1f2;"><nuxt-link to="/"><i class="fa-brands fa-twitter"></i></nuxt-link></li>
        <li style="--clr:#c32aa3;"><nuxt-link to="/"><i class="fa-brands fa-instagram"></i></nuxt-link></li>
      </ul>
      </footer>
    </div> -->
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  methods: {
    popup() {
      Swal.fire({
        title: 'Enter Your Tracking Code',
        input: 'text',
        backdrop: true,
        icon: 'question',
        target: 'div#app',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            text: 'in progress...',
            html: `<div role="progressbar" aria-valuemin="0" aria-valuemax="0" aria-valuenow="${result.value.followers}" class="v-progress-linear v-progress-linear--striped v-progress-linear--visible theme--light" style="height: 25px;"><div class="v-progress-linear__stream orange--text" style="width: 100%;"></div><div class="v-progress-linear__background orange" style="opacity: 0.3; left: 40%; width: 0%;"></div><div class="v-progress-linear__buffer" style="width: 0%;"></div><div class="v-progress-linear__determinate orange" style="width: ${result.value.followers}%;"></div><div class="v-progress-linear__content"><strong>${result.value.followers}%</strong></div></div>`
          })
        }
      })
    },
    scrollInto(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.header_btn{
  background-color: #5338ff;
  border: 0;
  color: #e2e2e2;
  padding: 10px 30px;
}
.header_btn:hover{
  background-color: #5938ff;
  color: #ffffff;
  box-shadow: 0 0 20px 0px #5938ff;
}
.ion-icon {
    width: 24px;
    height: 24px;
    vertical-align: bottom;
    filter: invert(.8);
}
.footer_socials{
  position: relative;
  display: flex;
  gap: 50px;
}
.footer_socials li{
  position: relative;
  list-style: none;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  transition: 0.5s;
}
.footer_socials li:hover{
  z-index: 9999;
  transform:scale(0.75);
}
.footer_socials li::before{
  content: '';
  position: absolute;
  inset: 30px;
  box-shadow: 0 0 0 10px var(--clr), 0 0 0 20px #050017, 0 0 0 22px var(--clr);
  transition: 0.5s;
}
.footer_socials li:hover::before{
  inset: 0;
}
.footer_socials li::after{
  content: '';
  position: absolute;
  inset: 0;
  background-color: #050017;
  transform: rotate(45deg);
}
.footer_socials li a{
  position: relative;
  text-decoration: none;
  color: var(--clr) !important;
  z-index:10;
  font-size: 2em;
  transition: 0.5s;
}
.footer_socials li:hover a{
  font-size: 3em;
  filter: drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr)) drop-shadow(0 0 60px var(--clr));

} 
.danteh_footer{
  background-color: #050017;
}
</style>
