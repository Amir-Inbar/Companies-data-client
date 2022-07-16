import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import companyPage from '../views/CompanyPage.vue'

// Demonstrate heavy component to load
const DialogPage = () => import('../views/DialogPage.vue')

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/company',
      name: 'company',
      component: companyPage,
      children: [{ path: ':companyId?', component: DialogPage }],
    },
  ],
})

export default router
