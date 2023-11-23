// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/room-detail',
    component: () => import('@/views/RoomDetails.vue')
  },
  {
    path: '/room-booking',
    component: () => import('@/views/RoomBooking.vue')
  },
  {
    path: '/auth',
    component: () => import('@/views/AuthenticationForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
