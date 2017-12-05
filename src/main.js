// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mixin from './mixin'
import VueProgressBar from 'vue-progressbar'
import Moment from 'vue-moment'

require('moment/locale/pt-br')

Vue.config.productionTip = false

Vue.use(Moment);

Vue.use(VueProgressBar, {
  color: 'rgb(51, 153, 255)',
  failedColor: 'red',
  height: '4px'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  mixins: [mixin],
  components: { App }
})
