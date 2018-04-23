<template>
	<div>
		<elheader :mtitle="mtitle" ></elheader> 
		<div class="blank"></div> 
		<div class="main_cont backcolor">
		<div class="chart1"></div>
		<!-- <div style="width:100%;height:30px;"></div> -->
		<!-- <img @load="imageLoaded" :src="images[0]"> -->
		<!-- <div class="nav">
			<ul>
				<li class="on">1</li>
				<li>2</li>
				<li>3</li>
				<li class="last">4</li>
			</ul>
		</div> -->
		<ul class="infobox"><li v-for='image in images'><div class="imgbox"><img @load="imageLoaded" :src="image"></div></li></ul>
		<!-- <div class="box"><img src="../../static/images/1.jpg"></div>
		<div class="box"><img src="../../static/images/2.jpg"></div>
		<div class="box"><img src="../../static/images/1.jpg"></div>
		<div class="box"><img src="../../static/images/2.jpg"></div> -->
		
		</div>
		<div class="blank"></div>
		<elfooter :indexHtml="indexHtmlVal"></elfooter>
	</div>
	</template>
	<script>
	import buttoncounter from '../components/buttoncounter.vue'
	import elheader from '../components/elheader.vue'
	import elfooter from '../components/elfooter.vue'
	import echarts from 'echarts';
		export default {
			data() {
				return {
					indexHtmlVal:1,
					mtitle:'Login',
					name:'',
					pwd:'',
					error:'',					
					loadedImages:0,
					images:[
						'../../static/images/1.jpg',
						'../../static/images/2.jpg',
						'../../static/images/1.jpg',
						'../../static/images/2.jpg'

					],
					node:[],
				}
			},
			components: {
		        elheader,
		        elfooter
		    },
			computed: {

			},
			methods:{
				imageLoaded(){
					this.loadedImages++;
				},
				chart1(e, n1, n2, n3, v1, v2, v3) {
				    var option = {
				        tooltip: {
				            trigger: 'item',
				            formatter: "{b}: {c} "
				        },
				        roseType: true,
				        legend: {
				            textStyle: {
				                color: '#fff',
				                fontSize: 13
				            },
				            selectedMode: false,
				            right: '25px',
				            top: -5,
				            y: 'top',
				            itemWidth: 14,
				            itemHeight: 14,
				            itemGap: 12,
				            data: [{
				                name: n1,
				                icon: 'rect'
				            }, {
				                name: n2,
				                icon: 'rect'
				            }, {
				                name: n3,
				                icon: 'rect'
				            }]
				        },
				        color: ['#48bef0', '#29e1c9', '#e4ff77'],
				        series: [{
				            legendHoverLink: false,
				            name: '',
				            type: 'pie',
				            startAngle: 30,
				            radius: ['50%', '80%'],
				            center: ['50%', '60%'],
				            selectedOffset: 0,
				            selectedMode: false,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'outside',
				                    formatter: "{d}%",
				                    textStyle: {
				                        fontSize: 20
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: true
				                }
				            },
				            data: [{
				                value: v1,
				                name: n1
				            }, {
				                value: v2,
				                name: n2,
				                selected: true
				            }, {
				                value: v3,
				                name: n3
				            }]
				        }]
				    };
				    echarts.init($(e)[0]).setOption(option);
				    this.node.push(echarts.init($(e)[0]));
				}
			},
			mounted(){
				let that = this;
				$(function(){
				that.chart1('.chart1', '购买报告数', '云服务', '专项基金', 90, 150, 200);
				
					/*that.$nextTick(() => {
            
          });*/
					/*var h= $('.nav').offset().top;*/
					/*var headerH = $('.blank').height();*/
					/*$('.box').each(function(){
						$(this).offset().top;
					})*/
					/*$('.nav li').eq(0).html(h);*/
					/*$(window).scroll(function(){
						$('.box').each(function(){
							var offset = $(this).offset().top,
							scrolltop = $(window).scrollTop(),
							imgH=$(this).height();
							
							if(scrolltop>=(offset-h-headerH)){
								console.log($(this).index())
								var index = $(this).index();
								$('.nav li').eq(index).addClass('on').siblings().removeClass('on');
							}

						})*/
						/*if($(this).scrollTop()>h-headerH){
							$('.nav').addClass('navPos');
						}else{
							$('.nav').removeClass('navPos');
						}

					});*/
					/*$(document).on('click','.nav li',function(){
						var index = $(this).index();
						$(this).addClass('on').siblings().removeClass('on');
						
						$('html,body').stop().animate({
						scrollTop: $('.box').eq(index).offset().top - $('.nav').height()-headerH
					}, 0);
						
					});*/
				})
			}
		}
	</script>
	<style>
		
	</style>