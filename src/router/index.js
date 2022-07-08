import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShoppingCart from "@/views/ShoppingCart"
import ProductDetails from "@/views/ProductDetails"

const routes = [
  {
    path: '/',
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
