<template>
	<div id="container_newsdetail">
		<!-- 新闻详情页 -->
		<div class="NewsHeader">
			<div class="NewsTitle">{{title}}</div>
			<div class="NewsTime">{{time}}</div>
		</div>
		<div class="NewsBody">
			<div class="NewsContent">{{content}}</div>
			<div class="NewsImgs">
				<img class="newsimg" :src="imgurl">
			</div>
			<div class="NewsContent">{{content}}</div>
			<div class="NewsImgs">
				<!-- <img class="newsimg" src="../../assets/news/dynamic/2-1.png"> -->
			</div>
			<div class="NewsContent">{{content}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				time:'',
				content:'',
				imgurl:'',
				imgsrcArr:[
					{
							id: 0,
							src: require('../../assets/news/dynamic/2-1.png'),
						},
						{
							id: 1,
							src: require('../../assets/news/dynamic/2-2.png'),
						},
						{
							id: 2,
							src: require('../../assets/news/dynamic/2-3.png'),
						},
						{
							id: 3,
							src: require('../../assets/news/dynamic/2-4.png'),
						},
						{
							id: 4,
							src: require('../../assets/news/dynamic/2-5.png'),
						},
						{
							id: 5,
							src: require('../../assets/news/dynamic/2-6.png'),
						},
						{
							id: 6,
							src: require('../../assets/news/dynamic/2-7.png'),
						},
						{
							id: 7,
							src: require('../../assets/news/dynamic/2-8.png'),
						},
						{
							id: 8,
							src: require('../../assets/news/dynamic/2-9.png'),
						},
						{
							id: 9,
							src: require('../../assets/news/dynamic/2-10.png'),
						},
						{
							id: 10,
							src: require('../../assets/news/dynamic/2-11.png'),
						},
						{
							id: 11,
							src: require('../../assets/news/dynamic/2-12.png'),
						}
				]
			}
		},
		created	() {
			// console.log("created-this.router",this.$route.query)
			this.title = this.$route.query.title;
			this.time = this.$route.query.time;
			this.content = this.$route.query.content;
			this.imgurl = this.imgsrcArr[this.$route.query.id].src
			//页面刷新时，回到顶部
			this.$nextTick(() => {
				window.scroll(0, 0);
			})
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/newsdetail.css");
</style>
