import Vue from 'vue'
import Router from 'vue-router'
import course_detail from '../components/course_detail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name:'',
      component:course_detail
    }
  ]
})
