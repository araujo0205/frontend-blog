import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Article from '@/Article'
import Categorias from '@/Categories'
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
      name: 'Article',
      component: Article
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

