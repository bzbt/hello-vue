import Vue from 'vue'
import Router from 'vue-router'
import AllProducts from '@/components/AllProducts'
import HelloWorld from '@/components/HelloWorld'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: AllProducts
    },
    {
      path: '/category/:cid',
      name: 'categoryUrl',
      component: AllProducts
    },
    {
      path: '/old-index',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/products/:pid',
      name: 'productUrl',
      component: ProductPage
    }
  ]
})
