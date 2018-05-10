import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../pages/module1/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Page1
    }
  ]
})
