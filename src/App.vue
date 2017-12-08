<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <nav-component/>
    <div>
      <router-view :key="$route.fullPath"/>
      <aside-component/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Aside from './components/Aside.vue'

export default {
  name: 'app',
  components: {
      'nav-component': Nav,
      'aside-component': Aside      
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Home',
      // all titles will be injected into this template
      titleTemplate: '%s | david blog'
  }
}
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.min.css';

body {
    background-color: #fdf6e3;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    font-family: arial,sans-serif;
}

@media screen and (max-width: 700px) {
    body {
       max-width: 95%;
    }
}
</style>
