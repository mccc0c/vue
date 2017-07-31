<template>
	<div>
		<elheader :mtitle="mtitle" ></elheader> 
		<div class="blank"></div> 
		<div class="main_cont">
			<div class="member_list">
				<img src="../../static/images/default.png">
				<label>{{membername}}</label>
			</div>

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
					membername:'',
					mtitle:'member'
				}
			},
			components: {
		        elheader,
		        elfooter
		    },
		    created() {
			    
			      
			  },
		    mounted() {
		    	let that = this;
		        $(function(){
		            /*console.log('jquery success');*/
		            /*that.membername=that.getData();*/
		            var getData = lsget('uid',1000*60);
		            /*console.log(getData);*/
					if(getData == null){
						localStorage.setItem('uid','');
						that.$router.push(that.$route.query.redirect || '/login');
						return false;
					}else{
						that.membername = getData;
					}
		        })
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