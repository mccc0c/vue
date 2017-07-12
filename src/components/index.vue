<template>
    <div class="header">
        <router-link to="/">
            <div style="width:30%;height:20px;background:#ccc"></div>
        </router-link>
        <router-link to="/hello">
            <div style="width:30%;height:20px;background:#ddd"></div>
        </router-link>
        <div>
            <p>{{ total }}</p>
            <buttoncounter v-on:increment="incrementTotal"></buttoncounter>
            <buttoncounter v-on:increment="incrementTotal"></buttoncounter>
        </div>
    </div>
</template>
<script>
/*引入组件*/
import buttoncounter from './buttoncounter.vue'
export default {
    name: 'index',
    data() {
        return {
        	total:0
        }
    },
    created() {

    },
    mounted() {
        /*$(function(){
        	console.log('jquery success');
        })*/
    },
    methods: {
    	incrementTotal:function(){
    		this.total=this.total+1;
    	}
    },
    /*注册组件*/
    components: {
        buttoncounter
    }
}
</script>
<style scoped>

</script>

