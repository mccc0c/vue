<template>
<button v-on:click="increment">{{counter}}</button>
</template>
<script>
export default {
    name: 'buttoncounter',
    data() {
        return {
        	counter:0
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
    	increment:function(){
    		this.counter=this.counter+=1;
    		this.$emit('increment');
    	}
    }
}
</script>