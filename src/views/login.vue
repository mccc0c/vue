<template>
	<div class="login">
		<elheader :mtitle="mtitle" ></elheader>  
		<div class="blank"></div>
		<div class="main_cont">		
			<form id="login_form">
				<ul class="login_wrapper">
					<li>
					<p ><i class="user"></i><input v-model="name" type="text" placeholder="input your userid" name="username"/></p>
					</li>
					<li>
					<p ><i class="pass"></i><input v-model="pwd" type="password" placeholder="input your password" name="password"/></p> 
					</li>
				</ul>
				<div class="myerrorbox">
                	<div class="myerror"><i><img src="../../static/images/m_2.png"/></i><span data-info="账号或密码错误"></span></div>
            	</div>
				<a @click="isLogin" class="submit_btn">Login in</a> 
			</form>
		</div>
		<div class="blank"></div>
		<elfooter></elfooter>
	</div>
	</template>
	<script>
	import elheader from '../components/elheader.vue'
	import elfooter from '../components/elfooter.vue'
		export default {
			data() {
				return {
					name:'admin',
					pwd:'1111',
					error:'',
					mtitle:'Login'
				}
			},
			components: {
		        elheader,elfooter
		    },
			computed: {
				/*user() {
					console.log(this.$store.state.user);
					return this.$store.state.user
				}*/
			},
			methods:{
				isLogin:function() {
					let that = this;
					$("#login_form").validate({
                        rules: {
                            username: {
                                required: true
                            },
                            password: {
                                required: true
                            }
                        },
                        messages: {
                            username: {
                                required: "必填项"
                            },
                            password: {
                                required: "必填项"
                            }
                        },
                        ignore: "not:hidden",
                        onfocusout: function(element, event) {
                            if ($(element).is(':input') && !$(element).is(':password')) {
                                $(element).val($.trim($(element).val()));
                            };
                        },
                        onkeyup: function(element) {
                            var errors = this.numberOfInvalids();
                            if (errors && this.errorList[0] && $(this.errorList[0].element).valid()) {
                                $('.myerror').hide().removeClass('on');
                            };
                        },
                        invalidHandler: function(form, validator) {
                            var errors = validator.numberOfInvalids();
                            if (errors) {
                                $('.myerror span').html(validator.errorList[0].message);
                                $('.myerror').show().addClass('on');
                                validator.errorList[0].element.focus();
                            }
                        },
                        errorPlacement: function(error, element) {}
                    });
                    if (!$("#login_form").valid()) {
                        return false;
                    };
		            that.$http.get('../static/data/login.json').then(response => {
		                if(response.data === null){that.hassomething=false;}
		                    var users= response.data.users;	
		            
		                    if(users[0].username!=that.name){
		                    	/*alert('wrong');*/
		                    	$('.myerrorbox span').text('账号或密码错误');
		                    	$('.myerror').show();
		                    }else{
		                    	//存入localStorage，表示已经登录
		                		lsset('uid',that.name);
		                	/*localStorage.setItem('uid',that.name);*/
		                		that.$router.push(that.$route.query.redirect || '/member');
		                    }	        
		                
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