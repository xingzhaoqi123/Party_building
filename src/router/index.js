import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components ={
  home :()=>import('../views/home/home'),
  login:()=>import('../views/login')
  
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.home
    },{
      path:'/login',
      meta:{
        name:'login'
      },
      component:components.login  
    }
  ]
})
