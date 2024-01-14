
<template>
  <div>
    <web-headear></web-headear>
    <router-view></router-view>
    <!-- <home-page></home-page> -->
    <web-footer></web-footer>
  </div>
</template>


<script setup>
import WebHeadear from './components/header/WebHeadear.vue';
// import HomePage from "./components/pages/HomePage.vue";
import WebFooter from './components/footer/WebFooter.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
