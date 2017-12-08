import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Article from '@/Article'
import Categorias from '@/Categories'
import Tags from '@/Tags'
import ArticlesFromFilter from '@/ArticlesFromFilter'

import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a/:article',
      name: 'Article',
      component: Article
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    },
    {
      path: '/categoria/:name',
      name: 'CategorieArticles',
      component: ArticlesFromFilter
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/tag/:name',
      name: 'tagArticles',
      component: ArticlesFromFilter
    }
  ]
})

