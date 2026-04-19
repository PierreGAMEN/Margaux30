import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cagnotte from '../views/Cagnotte.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cagnotte', component: Cagnotte },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})