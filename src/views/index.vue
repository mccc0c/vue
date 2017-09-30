<template>
    <div>
        <!-- <router-link to="/">
            <div style="width:30%;height:20px;background:#ccc"></div>
        </router-link> -->
        <elheader :mtitle="mtitle" ></elheader>  
        <div class="blank"></div>     
        <div class="main_cont">            
            <!-- <p>{{ total }}</p>
            <buttoncounter v-on:incremen="incrementTotal"></buttoncounter>
            <buttoncounter v-on:incremen="incrementTotal"></buttoncounter>        -->
            <!-- <button v-on:click="getData">getData</button> -->

            <router-link v-if="!isLogin" to="/login">
            <img src="../../static/images/nologin.gif" class="nologin"><span class="noloagintext">Please login in</span></router-link>

            <div v-else class="assign">
                <div class="addassgin"></div>
                <ul v-if="hassomething">
                <li v-for="item in items"><label>{{item.context}}</label><p>{{item.date}}</p></li>
            </ul>
            <p v-else>no data</p>   
            </div>
                    
         </div>
         <div class="blank"></div>
         <div class="dialog dialog_addassign"> 
            <a class="dclose">&nbsp;</a>
            <div class="title">
                <h3>add assignments</h3>
            </div>
            <div class="dcontent">
                <form class="form form_addassign" id="form_addassign">
                    <ul>
                        <li>
                            <label>add assignments</label>
                        </li>
                        <li>
                            <textarea placeholder="input your assignments" required name="assigncontext"></textarea>
                        </li>
                    </ul>
                    <div class="myerror"><span></span></div>
                    <div class="dbtn"><a class="addokay" id="addokay">ok</a> <a class="addcancel" >cancel</a></div>
                </form>
            </div>
        </div>
         <!-- <div>{{date}}</div> -->
         <elfooter></elfooter>
    </div>
</template>
<script>
/*引入组件*/
/*import buttoncounter from '../components/buttoncounter.vue'*/
import elheader from '../components/elheader.vue'
import elfooter from '../components/elfooter.vue'
export default {
    name: 'index',
    data() {
        return {
            /*total: 0,*/
            items: [],
            hassomething: true,
            mtitle:'welcome',
            isLogin:isEmptyObject()/*,
            date:new Date().toLocaleDateString()*/
        }
    },
    created() {
        this.getData();
    },
    mounted() {       
            let that = this;            
            $(function(){             
               var dialog_addassign = $('.assign .addassgin').modal({
                    dialog:'.dialog_addassign',
                    onOk: function() {}
                });
               $("#form_addassign").validate({
                    ignore: "not:hidden",
                    onfocusout: function(element, event) {
                      if ($(element).is(':input') && !$(element).is(':password')) {
                        $(element).val($.trim($(element).val()));
                      };
                    },
                    onkeyup: function(element) {
                      var errors = this.numberOfInvalids();
                      if (errors && this.errorList[0] && $(this.errorList[0].element).valid()) {
                        $('.myerror').css("visiblity","hidden");
                      };
                    },
                    invalidHandler: function(form, validator) {
                      var errors = validator.numberOfInvalids();
                      if (errors) {
                        $('.myerror span').html(validator.errorList[0].message);
                        $('.myerror').css("visiblity","visible").addClass('on');
                        validator.errorList[0].element.focus();
                      }
                    },
                    errorPlacement: function(error, element) {}
                });
               $(document).on('click', '#addokay', function() {
                    if (!$("#form_addassign").valid()) {
                      return;
                    };
                    var postdata = {
                      "context": $('textarea[name="assigncontext"]').val(),
                      "date":new Date().toLocaleDateString(),
                    };
                    postdata.name=JSON.parse(localStorage.getItem('uid')).data;
                    console.log(postdata);
                    that.$http.post(api+'/addassignments',postdata).then(response => {
                        that.getData();             
                        // success callback
                    }, response => {
                        // error callback
                    });
                    /*$.ajax({
                      type: 'post',
                      url: api+'/addassignments',
                      data: JSON.stringify(postdata),
                      contentType: "application/json;  charset=utf-8",
                      success: function(data) {
                        if (!data) {
                          $('.myerror span').html('提交失败，请重试！');
                          $('.myerror').show();
                          return false;
                        } else {
                          $('.myerror').hide();
                          that.getData();
                          m1.close(); //form表单隐藏
                          setTimeout(function() {
                            m2.open(); //成功弹框显示
                          }, 200);
                          
                        }
                      }
                    });*/
                    /*dialog_addassign.close(); //form表单隐藏*/
                    /*setTimeout(function() {
                      m2.open(); //成功弹框显示
                    }, 200);*/
                });
              /* $(document).on('click',".addassgin",function(){
                    dialog_addassign.open();
               });
               $(document).on('click',".dclose2",function(){
                    dialog_addassign.close();
               });*/
            })          
    },
    methods: {
        /*incrementTotal: function() {
            this.total = this.total + 1;
        },*/
        getData: function() {
            let that = this;
            if(!that.isLogin){               
                return false;
            }
            var datapost = {};
            datapost.name=JSON.parse(localStorage.getItem('uid')).data;
            that.$http.post(api+'/indexshow',datapost).then(response => {
                    that.items = response.body;               
                // success callback
            }, response => {
                that.hassomething=false;
                // error callback
            });
            /* $.ajax({                
                 url: '../static/data/user.json',
                 type: 'get',
                 dataType: 'json',
                 success: function(r) {
                     that.items=r;
                 },
                 error:function(){
                     that.hassomething=false;
                 }
             });*/
        }
        

    },
    /*注册组件*/
    components: {
        /*buttoncounter,*/
        elheader,
        elfooter
    }
}
</script>
<style scoped>
</script>
