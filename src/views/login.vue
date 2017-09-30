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
					pwd:'111',
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
                     /*$.ajax({                
		                 url: 'http://localhost:3000/123',
		                 type: 'get',
		                 dataType: 'json',
		                  headers:{
                			"Conten-Type":"http://localhost:3000/123"
            			},
		                 success: function(r) {
		                 	console.log(r);
		                    that.$router.push(that.$route.query.redirect || '/member');
		                 },
		                 error:function(){
		                     that.hassomething=false;
		                 }
             		});*/

             		/*jsonp跨域，只能get*/
             		/*that.$http.jsonp('http://localhost:3000/123',{},{
		            	header:{}
		            }).then(response => {
		            	console.log(response.data);
		                // success callback
		            }, response => {
		                // error callback
		                alert('Wrong');
		            });*/
		            /*that.$http.get(api+'/123').then(response => {
		            	console.log(response.data);
		            	lsset('uid',that.name);
		            	that.$router.push(that.$route.query.redirect || '/member');		                
		                // success callback
		            }, response => {
		                // error callback
		                alert('Wrong');
		            });*/
		            var datapost = {};
		            /*alert(that.name+":"+that.pwd);*/
		            datapost.name = that.name;
		            datapost.password = that.pwd;
		            that.$http.post(api+'/loginvue',datapost).then(response => {
		            	/*console.log(response);*/
		            	lsset('uid',that.name);
		            	that.$router.push(that.$route.query.redirect || '/member');	
		            	/*alert(response.body.password);	*/                
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