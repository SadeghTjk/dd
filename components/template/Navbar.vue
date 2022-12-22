<template>
<nav class="bg-[var(--body-bg)] px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <nuxt-link to="/" class="logo flex">
      <img src="/img/danteh-logo.png" class="h-12 md:h-20" alt="Danteh Logo" />
      <span class="self-center text-2xl font-bold font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-sky-200 md:text-4xl lg:text-5xl">anteh</span>
  </nuxt-link>
  <div class="flex md:order-2">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-200 rounded-lg group bg-gradient-to-br from-[var(--logo-purple)] via-purple-500 to-[var(--logo-blue)] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 md:text-lg ">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 button-bg rounded-md group-hover:bg-opacity-0">
            Track Order
        </span>
      </button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm md:hidden focus:outline-none" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-200 sm:bg-gray-800 md:bg-transparent rounded-lg font-medium md:flex-row md:space-x-8 md:mt-0 md:text-lg md:border-0 lg:text-2xl">
      <li>
        <nuxt-link to="/" aria-current="page">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#d">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#s">Services</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#a">Contact</nuxt-link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<style scoped>
*{
    @apply font-quicksand;
}
li .nuxt-link-exact-active{
    @apply font-bold text-white bg-violet-700 md:font-bold md:bg-transparent;
}
ul > li > a{
 @apply block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-violet-600 duration-300 md:hover:bg-transparent md:p-0;
}
</style>