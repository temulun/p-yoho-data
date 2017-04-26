import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page'
import LeftMap from '@/components/left-map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    }
  ]
})
