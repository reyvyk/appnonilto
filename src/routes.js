import VueRouter from 'vue-router'

import App from './pages/Home.vue'

const routes = [
  { path: '/', component: App }
]

const router = new VueRouter({
  routes // short for routes: routes
})


export default router