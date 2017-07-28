<template>
	<div class="login">
		<elheader :mtitle="mtitle" ></elheader>  
		<div class="blank"></div>
		<div class="main_cont">		
			<form>
				<ul class="login_wrapper">
					<li>
					<label>Username</label>
					<p><input v-model="name" type="text" placeholder="input your userid" /></p>
					</li>
					<li>
					<label>password</label> 
					<p><input v-model="pwd" type="password" placeholder="input your password"/></p> 
					</li>
				</ul>
				<a @click="isLogin" class="submit_btn">Login in</a> 
			</form>
		</div>
		<div class="blank"></div>
	</div>
	</template>
	<script>
	import elheader from '../components/elheader.vue'
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
		        elheader
		    },
			computed: {
				user() {
					console.log(this.$store.state.user);
					return this.$store.state.user
				}
			},
			methods:{
				isLogin:function() {
					let that = this;
		            that.$http.get('../static/data/login.json').then(response => {
		                if(response.data === null){that.hassomething=false;}
		                    var users = response.data.users;	
		                    console.log('login in');	    
		                    /*var flag = false;
		                    for(var user in users){
		                    	console.log(this);
		                    	if(that.name == user.username && that.pwd == user.password){
		                    		flag = true;
		                    		break;
		                    	}
		                    }
		                    console.log(flag);
		                if(!flag){
		                	console.log('success');
		                	that.$router.push('/member');
		                }*/
		                //存入localStorage，表示已经登录
		                localStorage.setItem('uid',that.name);
		                that.$router.push(that.$route.query.redirect || '/member');
		                // success callback
		            }, response => {
		                // error callback
		                alert('Wrong');
		            });
				}
			}
		}
	</script>
	<style>
		
	</style>