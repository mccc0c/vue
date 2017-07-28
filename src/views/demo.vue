<template>
	<div>
		<elheader :mtitle="mtitle" ></elheader> 
		<div class="blank"></div> 
		<div class="main_cont">
		

		
		</div>
		<div class="blank"></div>
		<elfooter></elfooter>
	</div>
	</template>
	<script>
	import buttoncounter from '../components/buttoncounter.vue'
	import elheader from '../components/elheader.vue'
	import elfooter from '../components/elfooter.vue'
		export default {
			data() {
				return {
					name:'',
					pwd:'',
					error:'',
					mtitle:'Login'
				}
			},
			components: {
		        elheader,
		        elfooter
		    },
			computed: {
				
			},
			methods:{
				
			}
		}
	</script>
	<style>
		
	</style>