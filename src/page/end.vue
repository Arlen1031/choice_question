<template>
	<div class="end">
		<p>{{score}}分</p>
		<span>END</span>
	</div>  
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'End',
  data(){
  	return{
  		rightAnswer:[2,7,12,13,18],//正确答案
  		score:0//分数
  	}
  },
  methods:{
//	计分
  	computedScore(){
  		var self = this;
  		this.answerid.forEach((item,index)=>{
			if(item == this.rightAnswer[index]){
				this.score+=20;
			}
  		})
  	}
  },
  computed:mapState(['answerid']),
  created(){
  	this.computedScore();
  }
}
</script>
<style>
@import url("../../static/css/btn.css");
body{
	background:url(../assets/1-1.jpg) left center no-repeat;
	background-size: 100% 100%;
}
	.end{
		color: #FFFFFF;
		font-size: 20px;
		text-align: center;
		padding-top:100px ;
	}
	p{
		font-size: 22px;
		font-weight: bold;
		padding-bottom: 50px;
	}
</style>
