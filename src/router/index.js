import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShoppingCart from "@/views/ShoppingCart"
import ProductDetails from "@/views/ProductDetails"
import PageNotFound from "@/views/PageNotFound"

const routes = [
  {
    path: '/:catchAll(.*)*',
    name: "pagenotfound",
    component: PageNotFound,
  },
  { path: '/', redirect: '/homepage' },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/productdetails',
    name: 'productdetails',
    component: ProductDetails
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
