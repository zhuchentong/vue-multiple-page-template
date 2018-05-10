import Vue from 'vue'
import Router from 'vue-router'
import Page2 from '@/pages/module2/page2.vue'
import Page3 from '@/pages/module2/page3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page2',
      component: Page2
    }, {
      path: '/page3',
      name: 'page3',
      component: Page3
    }
  ]
})
