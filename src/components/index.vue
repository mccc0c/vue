<template>
	<div class="header">
		<router-link to="/"><div style="width:30%;height:20px;background:#ccc"></div></router-link>
		<router-link to="/hello"><div style="width:30%;height:20px;background:#ddd"></div></router-link>
	</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  created (){

  },
  mounted (){
  	console.log('jquery success');
  	/*$(function(){

  	})*/
  },
  method:{

  }
}
</script>
<style scoped>
	
</style>