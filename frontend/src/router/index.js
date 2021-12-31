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
    meta: {
      isLog: true,
      requiresAuth: false,
      title: 'Groupomania | Login'
    }
  },
  {
    path: '/signup',
    name: 'Register',
    component: Signup,
    meta: {
      isLog: true,
      requiresAuth: false,
      title: 'Groupomania | Signup'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      title: 'Groupomania | Home'
    },
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: false,
      title: 'Groupomania | Profile'
    }
  },
  {
    path: '/post/:id',
    name: 'OnePost',
    component: OnePost,
    meta: {
      requiresAuth: false,
      title: 'Groupomania | Post'
    }
  },
  {
    path: '/edit/:id',
    name: 'EditPost',
    component: EditPost,
    meta: {
      requiresAuth: false,
      title: 'Groupomania | Edit your Post'
    },
  },

]

const router = new VueRouter({
  routes
})

export default router
