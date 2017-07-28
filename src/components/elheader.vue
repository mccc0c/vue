<template>
	<div class="header">
		<router-link to="/" class="ahello">index</router-link>
		<div>{{mtitle}}</div>
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