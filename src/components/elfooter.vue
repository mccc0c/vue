<template>
	<div class="footer">

		<!-- <router-link to="/hello" class="a1">Hello</router-link>
		<i></i>
		<router-link to="/information" class="a2">Infomation</router-link>
		<div class="clear"></div> -->
		<div class="box" :class="indexHtml===0 ? 'on' : '' "><router-link to="/" class="index"><i></i><span>index</span></router-link></div>
		<div class="box" :class="indexHtml===1 ? 'on' : '' "><router-link to="/information" class="information"><i></i><span>info</span></router-link></div>
		<!-- <div class="box"><router-link to="/information" class="information"><i></i><span>info</span></router-link></div>
		<div class="box"><router-link to="/information" class="information"><i></i><span>news</span></router-link> --></div>
	</div>
</template>
<script>
	export default{
		name:'elfooter',
		data(){
			return {

			}

		},
		props:['indexHtml']
	}
</script>