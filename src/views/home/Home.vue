<template>
	<div id="container">
		<div class="banner">
			<div>
				<img class="banner_home" src="../../assets/home/0-banner.jpg">
			</div>
			<div style="position: relative;">
				<img class="banner2" src="../../assets/home/1.jpg">
			</div>
			<p class="SeeMore" @click="LookMore('/state')">
				<span class="SeeMore_txt">查看更多</span>
				<img class="SeeMore_line" src="../../assets/home/2-bottom.jpg">
			</p>
		</div>

		<div class="xwzx_content">
			<div class="xwzx_content_div">
				<h3>新闻中心</h3>
				<span class="divider">
					<el-divider class="xwzx_title_bg"  content-position="center">New Center</el-divider>
				</span>
			</div>

			<div>
				<div class="xwzx_sm_container">
					<ul class="xwzx_ul">
						<li class="xwzx_li" v-for="item in NewCenterList" :key="item.id">
							<div class="grid-content bg-purple" style="position: relative;">
								<img class="xwzx_img" :src="item.imgurl">
								<div class="xwzx_text_title">{{item.title}}</div>
								<div class="xwzx_text_content">{{item.content}}</div>
							</div>
						</li>
					</ul>
				</div>
				
			</div>

			<div class="xwzx_seemore">
				<el-button class="xwzx_seemore_btn" type="primary">查看更多</el-button>
			</div>
		</div>

		<div class="ryzz_content">
			<!-- 荣誉资质 -->
			<div class="ryzz_content_div">
				<h3>荣誉资质</h3>
				<span class="divider">
					<el-divider content-position="center">Honorary qualification</el-divider>
				</span>
			</div>

			<div>
				<!-- 动态轮播图片-->
				<div style="width: 80%;margin: 0 auto;">
					<el-carousel :interval="4000" height="150px" width="180px">
						<el-carousel-item v-for="item in imgList" :key="item.id">
							<img :src="item.idView" class="image" style="width: 177px;height: 129px;">
							 <div class="medium" style="">{{ item.content }}</div>
						</el-carousel-item>
					</el-carousel>
					<!-- <img class="main_img" src="../../assets/home/3-1.png"> -->

				</div>
				<!-- 底部图片-->
				<div >
					<img class="base_img" src="../../assets/home/3-base.png">
				</div>
				<!-- 左箭头图片-->
				<!-- <div>
					<img class="left_img" src="../../assets/home/3-left.png">
				</div> -->
				<!-- 右箭头图片-->
				<!-- <div>
					<img class="right_img" src="../../assets/home/3-right.png">
				</div> -->
			</div>
		</div>

		<div class="cptx_content">
			<!-- 产品体系 -->
			<div class="cptx_content_div">
				<h3>产品体系</h3>
				<span class="divider">
					<el-divider content-position="center">Product system</el-divider>
				</span>
			</div>

			<div>
				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="12">
						<div class="grid-content bg-purple">
							<img class="cptx_img" src="../../assets/home/4-1.jpg">
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light">
							<img class="cptx_img" src="../../assets/home/4-2.jpg">
						</div>
					</el-col>
				</el-row>
				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="12">
						<div class="grid-content bg-purple">
							<img class="cptx_img" src="../../assets/home/4-3.jpg">
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light">
							<img class="cptx_img" src="../../assets/home/4-4.jpg">
						</div>
					</el-col>
				</el-row>
			</div>
		</div>

		<div class="xqhz_content">
			<!-- 校企合作 -->
			<div class="xqhz_content_div">
				<h3>校企合作</h3>
				<span class="divider">
					<el-divider content-position="center">School enterprise cooperation</el-divider>
				</span>
			</div>
			<div>
				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-1.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light">
							<img class="xqhz_img" src="../../assets/home/6-2.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-3.png">
						</div>
					</el-col>
				</el-row>

				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-4.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light">
							<img class="xqhz_img" src="../../assets/home/6-5.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-6.png">
						</div>
					</el-col>
				</el-row>

				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-7.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light">
							<img class="xqhz_img" src="../../assets/home/6-8.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-9.png">
						</div>
					</el-col>
				</el-row>

				<el-row type="flex" justify="space-around" :gutter="20" class="row-bg">
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-10.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light">
							<img class="xqhz_img" src="../../assets/home/6-11.png">
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple">
							<img class="xqhz_img" src="../../assets/home/6-12.png">
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				NewCenterList: [{
						id: 0,
						imgurl: require('../../assets/home/2-1.png'),
						title: "荣耀见证实力",
						content: "恭喜杰越教育荣获腾讯"
					},
					{
						id: 1,
						imgurl: require('../../assets/home/2-2.png'),
						title: "6周年庆典",
						content: "新的征程新的起点"
					},
					{
						id: 2,
						imgurl: require('../../assets/home/2-3.png'),
						title: "杰越教育/教师专访",
						content: "第九期：长沙总部-芥"
					},
					{
						id: 3,
						imgurl: require('../../assets/home/2-4.png'),
						title: "杰越教育/教师专访",
						content: "第八期：长沙总部"
					}
				],
				imgList: [{
						id: 0,
						idView: require('../../assets/home/3-1.png'),
						content:"腾讯课堂认证机构"
					},
					{
						id: 1,
						idView: require('../../assets/home/3-2.png'),
						content:"腾讯课堂创造101奖"
					},
					{
						id: 2,
						idView: require('../../assets/home/3-3.png'),
						content:"2018年度影响力在线教育品牌"
					},
					{
						id: 3,
						idView: require('../../assets/home/3-4.png'),
						content:"2017年度知名在线品牌"
					},
					{
						id: 4,
						idView: require('../../assets/home/3-5.png'),
						content:"腾讯课堂最受欢迎奖"
					},
					{
						id: 5,
						idView: require('../../assets/home/3-6.png'),
						content:"腾讯课堂教育突破奖"
					},
				]
			};
		},
		methods: {
			//查看更多，跳转至企业简介
			LookMore(e){
				this.$router.push(e)
				//路由跳转后回到顶部
				this.$nextTick(() => {
					window.scroll(0,0);
				})
			},
		},
	};
</script>

<style scoped="scoped">
	@import url("../../assets/css/home.css");
</style>
