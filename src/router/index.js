import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactView from '@/components/ContactView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/ContactView',
      component: HelloWorld
    },
    {
      path: '/ContactView',
      name: 'ContactView',
      component: ContactView
    }
  ]
})
