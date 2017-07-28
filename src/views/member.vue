<template>
	<div>
		<elheader :mtitle="mtitle" ></elheader> 
		<div class="blank"></div> 
		<div class="main_cont">
	

		<a @click="isLoginOut" class="submit_btn">Login out</a> 
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
			name:'member',
			data() {
				return {
					name:'',
					pwd:'',
					error:'',
					mtitle:'member'
				}
			},
			components: {
		        elheader,
		        elfooter
		    },
			computed: {
				
			},
			methods:{
				isLoginOut:function () {
					let that = this;
					localStorage.setItem('uid','');
					that.$router.push(that.$route.query.redirect || '/login');
				}
			}
		}
	</script>
	<style>
		
	</style>