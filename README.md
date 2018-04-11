# 说明

> 简单的一个vue2 + vuex+router+axios的vue全家桶项目

> 模仿开发，麻雀虽小，五脏俱全，入门练习。

>  开发环境 win7 nodejs 8.7.0


## Build Setup

``` bash
# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 路由配置
```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Item from '@/page/Item'
import End from '@/page/End'

Vue.use(Router)

export default new Router({
//	mode:'history',
  routes: [
    {
      path: '/',
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
```

## 创建store
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		itemDetail:[],
		answerid:[],
		itemNum : 0
	},
	mutations:{
//		填充数据
		newItem(state,obj){
			state.itemDetail = obj;
		},
//		记录答案
		rember_answer(state,id){
			state.answerid.push(id);
		},
//		初始化信息
		init_data(state){
			state.itemDetail = [];
			state.answerid = [];
			itemNum : 0
		}
	}
})
export default store
```