<template>
  <div>
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
