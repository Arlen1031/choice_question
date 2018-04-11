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