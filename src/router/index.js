import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homeView.vue')
  },
  {
    path: '/contact-list',
    name: 'contact-list',
    component: () => import('../views/contactList.vue')
  },
  {
    path: '/create-contact',
    name: 'create-contact',
    component: () => import('../views/createContact.vue')
  },
  {
    path: '/contact/:id/edit',
    name: 'edit-contact',
    component: () => import('../views/editContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
