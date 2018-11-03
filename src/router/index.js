import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import footer from '@/components/footer'
import list1 from '@/components/list1'
import list2 from '@/components/list2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footer',
      component: footer
    }, 
    {
      path: '/list1',
      name: 'list1',
      component: list1
    }, 
    {
      path: '/list2',
      name: 'list2',
      component: list2
    }
  ]
})
