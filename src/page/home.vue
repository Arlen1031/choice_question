<template>
	<div class="home">
		<router-link to='/item' class='btn'>开始答题1</router-link>
	</div>  
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
@import url("../../static/css/btn.css");
body{
	background:url(../assets/1-1.jpg) left center no-repeat;
	background-size: 100% 100%;
}
	.home{
		text-align: center;
		padding-top:100px ;
	}
</style>
