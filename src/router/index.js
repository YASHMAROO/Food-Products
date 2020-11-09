import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../components/Home.vue'
import Favourites from '../components/Favourites.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/fav',
        name: 'favourites',
        component: Favourites,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta : {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta : {
            requiresGuest: true
        }
    }
];
  
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
 
//Nav Guards
router.beforeEach((to, from, next) => {
    //Check for required auth guard
    if(to.matched.some(record => record.meta.requiresAuth)) {
      //Check if NOT logged in
      if(!firebase.auth().currentUser) {
        //GO TO LOGIN PAGE
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        //PROCEED TO THE NEXT ROUTE
        next();
      }
    } else if(to.matched.some(record => record.meta.requiresGuest)) {
      //CHECK IF LOGGED IN
      if(firebase.auth().currentUser) {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        //PROCEED TO THE ROUTE
        next();
      }
    } else {
      //PROCEED TO THE NEXT ROUTE
      next();
    }
});
  
export default router;