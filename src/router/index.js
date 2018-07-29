import Vue from 'vue'
import Router from 'vue-router'
import example from '../components/example'

Vue.use(Router)

export default new Router({
    mode:"hash",
  routes: [
    {
      path: '/',
      name: 'example',
      component: example
    }
  ]
})
