import Vue from 'vue'
import VueRouter from 'vue-router'

// Import halaman
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Payment from '../views/Payment.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/cart', name: 'Cart', component: Cart },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Middleware auth (opsional, jika pakai Vuex nanti)
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true' // Ganti dengan Vuex jika sudah ada
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (to.matched.some(record => record.meta.guestOnly) && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
