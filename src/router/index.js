import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/edit.vue'
import QuizDetails from '../views/quiz-details.vue'
import Game from '../views/game.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create/:quizId?',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/game/:quizId/single-player',
    name: 'game',
    component: Game
  },
  {
    path: '/game/:quizId',
    name: 'QuizDetails',
    component: QuizDetails
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
