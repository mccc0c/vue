<template>
	<div class="header">
		<div class="amenu">menu<img src="../../static/images/menu.png"></div>
		<div class="title">{{mtitle}}</div>
		<router-link to="/member" class="amember"><img src="../../static/images/m_1.png"></router-link>
	</div>
</template>
<script>
	export default{
		name:'elheader',
		data(){
			return {

			}

		},
		props:['mtitle']
	}
</script>