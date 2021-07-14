import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to,from,next){
      const { isLogin } = localStorage;
  
      isLogin ? next({name:'Home'}): next(); 

      //const isLogin = localStorage.isLogin;
      // if(isLogin){
      //   next({name:'Home'});
      // }else{
      //   next();
      // }
      // next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  const { isLogin } = localStorage;

  ( isLogin || to.name === 'Login' ) ?  next() : next({name:'Login'}); 

  //const isLogin = localStorage.isLogin;
  // if(isLogin || to.name==='Login'){
  //   next();
  // }else{
  //   next({name:'Login'});
  // }
  // next();

})

export default router
