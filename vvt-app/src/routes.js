import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/main', component: Home, meta: { title: '喜歡就來點愛' } },
  { path: '/', component: Login, meta: { title: "Let's start from here." } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
