import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import Item from '@/page/Item'
import End from '@/page/End'

Vue.use(Router)

export default new Router({
//	mode:'history',
  routes: [
    {
      path: '/',
//    name: 'Home',
      component: Home
    },{
    	path:'/item',
    	name:'Item',
    	component:Item
    },{
    	path:'/end',
    	name:'End',
    	component:End
    }
  ]
})
