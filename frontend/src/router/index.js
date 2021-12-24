import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import OnePost from '../views/OnePost.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Register',
    component: Signup,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/post/:id',
    name: 'OnePost',
    component: OnePost,
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: EditPost,
  },

]

const router = new VueRouter({
  routes
})

export default router
