import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Content from '@/Content'
import Categorias from '@/Categorias'
import Tags from '@/Tags'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/postagem',
      name: 'Content',
      component: Content
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    }      
  ]
})

