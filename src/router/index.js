import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import calenderView from '../views/CalenderView.vue'
import PrayerView from '@/views/PrayerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ImpressumView',
    name: 'ImpressumView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ImpressumView.vue')
  },
  {
    path: '/PrayerView',
    name: 'PrayerView',
    component: PrayerView
  },
  {
    path: '/DatenschutzView',
    name: 'datenschutz',
    component: () => import('../views/DatenschutzView.vue')
  },
  {
    path: '/calender-view',
    name: 'calender-view',
    component: calenderView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
