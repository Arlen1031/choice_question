<template>
	<div class="item">
		<div v-for='item in backData'>
			<div class="title">{{item.level}}</div>
			<div class="item_title">{{item.itemDetail[$store.state.itemNum].topic_name}}</div>
			<ul>
				<li v-for='(subItem,index) in item.itemDetail[$store.state.itemNum].topic_answer' :class="{has_choosed:choosedNum == index}" @click="choose(index,subItem.topic_answer_id)">
					<span>{{chooseType(index)}}.</span>
					<span>{{subItem.answer_name}}</span>
				</li>
			</ul>
			<footer>
				<!--<div class="btn" @click='prevItem' v-if='$store.state.itemNum>0'>上一题</div>-->
				<div class="btn" @click='nextItem' v-if='$store.state.itemNum<item.itemDetail.length-1'>下一题</div>
				<div class="btn" @click='submitAnswer' v-else>提交</div>
			</footer>

		</div>
	</div>  
</template>

<script>
export default {
  name: 'Item',
  data(){
  	return {
  		dataUrl:'static/data.json',
  		backData:[],//返回的数据
  		choosedNum:null,//选中答案索引
  		choosedId:null//选中答案id
  	}
  },
  mounted(){//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子，此时可进行ajax数据操作。该函数在整个实例生命中只执行一次。
  	this.getData();
  },
  methods:{
  	getData(){
  		var self = this;
  		self.$http({
  			url:self.dataUrl,
  			method:'get'
  		}).then(function(backdata){
  			self.backData = eval(backdata.data)
//			console.log(self.backData[0].level)
  		})
  	},
  	nextItem(){
  		var self = this;
  		if(self.choosedNum!==null){
  			self.choosedNum =null;
  			self.$store.commit('rember_answer',self.choosedId)
  			self.$store.state.itemNum++;
  		}else{
  			alert('请选择答案!')
  		}
  	},
  	submitAnswer(){
  		var self = this;
  		if(self.choosedNum!==null){
  			self.choosedNum =null;
  			self.$store.commit('rember_answer',self.choosedId)
  			console.log(self.$store.state.answerid);
  			this.$router.push('End');
  			
  		}else{
  			alert('请选择答案!')
  		}
  	},
//	prevItem(){
//		var self = this;
//		self.$store.state.itemNum--;
//	},
  	chooseType(type){
  		switch(type){
  			case 0:return 'A';	
  			case 1:return 'B';	
  			case 2:return 'C';	
  			case 3:return 'D';	
  		}
  	},
  	choose(type,id){
  		this.choosedNum = type;
  		this.choosedId = id;
  	}
  }
}
</script>
<style type="text/css">
@import url("../../static/css/btn.css");
body{
	background:url(../assets/1-1.jpg) left center no-repeat;
	background-size: 100% 100%;
}
.item{
	color: #FFFFFF;
}
.title{
	text-align: center;
	color: #42B983;
	font-size: 20px;
	font-weight: bold;
	padding: 20px 0;
}
.item_title{
	/*text-align: center;*/
	padding: 10px 30px 0;
	font-size: 18px;
}
ul{
	padding: 10px 100px 50px;
}
ul li{
	padding: 5px;
}
.has_choosed{
	color: #42B983;
}
footer{
	text-align: center;
}
</style>
