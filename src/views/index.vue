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

            <div v-else>
                <ul v-if="hassomething">
                <li v-for="item in items">{{item.title}}</li>
            </ul>
            <p v-else>no data</p>   
            </div>
                    
         </div>
         <div class="blank"></div>
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
            items: '',
            hassomething: true,
            mtitle:'welcome',
            isLogin:isEmptyObject()
        }
    },
    created() {

    },
    mounted() {
        
            /*let that = this;*/
           this.getData();
            
    },
    methods: {
        /*incrementTotal: function() {
            this.total = this.total + 1;
        },*/
        getData: function() {
            let that = this;
            /*if(!that.isLogin){
                that.$router.push(that.$route.query.redirect || '/login');
                return false;
            }*/
            that.$http.get('../static/data/user.json').then(response => {
                if(response.data === null){that.hassomething=false;}
                    that.items = response.data;
                    /*console.log(response.data);*/
                
                // success callback
            }, response => {
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
