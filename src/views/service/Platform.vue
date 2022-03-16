<template>
	<!-- 服务中心 -->
	<div id="container_platform">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/service/platform/0-banner.jpg">
			</div>
		</div>
	
		<div class="OneInfo_ptfw">
			<div>
				<span class="Title">教学服务一体化</span>
			</div>
	
			<div class="one_contents">
				<ul class="one_ul">
					<li class="one_li" v-for="item in OneInfoData" :key="item.id">
						<div><img class="one_img" :src="item.src"></div>
						<div class="one_name">{{item.name}}</div>
						<div class="one_content">{{item.content}}</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="TwoInfo_ptfw">
			<div>
				<span class="Title">课程种类多元化</span>
			</div>
			
			<div class="two_contents">
				<ul class="two_ul">
					<li class="two_li" v-for="item in TwoInfoData" :key="item.id">
						<div class="two_left">
							<img class="two_img" :src="item.src">
						</div>
						<div class="two_right">
							<div class="two_name">{{item.name}}</div>
							<div class="two_content">{{item.content}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	
		<div class="ThreeInfo_ptfw">
			<div>
				<span class="Title">教育服务</span>
				<span class="divider">
					<el-divider content-position="center">Educational services</el-divider>
				</span>
			</div>
	
			<div class="three_content">
				<ul class="three_ul">
					<li class="three_li" v-for="item in ThreeInfoData" :key="item.id"
					@click="showInfo(item.id)">
						<!-- <img class="three_img" :src="item.src"> -->
						<img class="three_img" :src="item.src">
					</li>
				</ul>
			</div>
			
			<div class="three_content_detail" v-for="item in ThreeInfoData_as" :key="item.id">
				<img class="three_img_detail" :src="item.src" v-show="(showid==item.id)">
			</div>
		</div>
		
		<div class="FourInfo_ptfw">
			<div>
				<img class="four_five_six_img" src="../../assets/service/platform/4-1.jpg">
			</div>
			
			<div class="four_content">
				<div class="Title_org">课程研究院</div>
				<p class="text_content">专职课研老师，严控课程研发质量</p>
				<p class="text_content">课程与企业需求实时接轨</p>
				<p class="text_content">打造真实企业级研发体系</p>
			</div>
		</div>
		
		<div class="FiveInfo_ptfw">
			<div>
				<img class="four_five_six_img" src="../../assets/service/platform/4-2.jpg">
			</div>
			
			<div class="five_content">
				<div class="Title_org">大数据中心</div>
				<p class="text_content">教务管理可以进行招生分析、学员能力</p>
				<p class="text_content">教学创新可以进行教学质量评估、上网行为分析、学员成绩分析</p>
				<p class="text_content">应用创新可以进行学员画像、就业分析</p>
			</div>
		</div>
		
		<div class="SixInfo_ptfw">
			<div>
				<img class="four_five_six_img" src="../../assets/service/platform/4-3.jpg">
			</div>
			
			<div class="five_content">
				<div class="Title_org">腾讯课堂学习平台</div>
				<p class="text_content_end">保障学员利益，提升教学质量，与杰越教育共成长</p>
				<div class="QRcode">
					<img class="six_img" src="../../assets/service/platform/4-4.jpg">
					<p class="text_end">杰越教育腾讯课堂</p>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				OneInfoData: [{
						id: 0,
						src: require('../../assets/service/platform/1-1.png'),
						name:"课程顾问",
						content:"专业老师答疑指导"
					},
					{
						id: 1,
						src: require('../../assets/service/platform/1-2.png'),
						name:"多师在线",
						content:"主讲老师+助教快速响应"
					},
					{
						id: 2,
						src: require('../../assets/service/platform/1-3.png'),
						name:"售后跟踪",
						content:"问题反馈快速响应"
					}
				],
				TwoInfoData: [{
						id: 0,
						src: require('../../assets/service/platform/2-1.jpg'),
						name:"IT互联网",
						content:`PHP、C/C++、游戏开发、Python、Java、Go、软件测试、
						大数据、Web前端、AI、微信开发等IT互联网系列课程`
					},
					{
						id: 1,
						src: require('../../assets/service/platform/2-2.jpg'),
						name:"设计创作",
						content:`平面设计、3D建模、UI设计、插画、原画、PS、淘宝美工等职业系统课程`
					},
					{
						id: 2,
						src: require('../../assets/service/platform/2-3.jpg'),
						name:"兴趣爱好",
						content:`播音主持、配音、影视后期、视频剪辑、直播培训等兴趣生活类课程`
					}
				],
				ThreeInfoData: [{
						id: 0,
						src: require('../../assets/service/platform/3-1-1.png'),
						src_checked: require('../../assets/service/platform/3-2-1.png'),
					},
					{
						id: 1,
						src: require('../../assets/service/platform/3-1-2.png'),
						src_checked: require('../../assets/service/platform/3-2-2.png'),
					},
					{
						id: 2,
						src: require('../../assets/service/platform/3-1-3.png'),
						src_checked: require('../../assets/service/platform/3-2-3.png'),
					},
					{
						id: 3,
						src: require('../../assets/service/platform/3-1-4.png'),
						src_checked: require('../../assets/service/platform/3-2-4.png'),
					},
					{
						id: 4,
						src: require('../../assets/service/platform/3-1-5.png'),
						src_checked: require('../../assets/service/platform/3-2-5.png'),
					},
					{
						id: 5,
						src: require('../../assets/service/platform/3-1-6.png'),
						src_checked: require('../../assets/service/platform/3-2-6.png'),
					},
					{
						id: 6,
						src: require('../../assets/service/platform/3-1-7.png'),
						src_checked: require('../../assets/service/platform/3-2-7.png'),
					},
					{
						id: 7,
						src: require('../../assets/service/platform/3-1-8.png'),
						src_checked: require('../../assets/service/platform/3-2-8.png'),
					},
					{
						id: 8,
						src: require('../../assets/service/platform/3-1-9.png'),
						src_checked: require('../../assets/service/platform/3-2-9.png'),
					},{
						id: 9,
						src: require('../../assets/service/platform/3-1-10.png'),
						src_checked: require('../../assets/service/platform/3-2-10.png'),
					}
				],
				ThreeInfoData_as: [{
						id: 0,
						src: require('../../assets/service/platform/3-3-1.png'),
					},
					{
						id: 1,
						src: require('../../assets/service/platform/3-3-2.png'),
					},
					{
						id: 2,
						src: require('../../assets/service/platform/3-3-3.png'),
					},
					{
						id: 3,
						src: require('../../assets/service/platform/3-3-4.png'),
					},
					{
						id: 4,
						src: require('../../assets/service/platform/3-3-5.png'),
					},
					{
						id: 5,
						src: require('../../assets/service/platform/3-3-6.png'),
					},
					{
						id: 6,
						src: require('../../assets/service/platform/3-3-7.png'),
					},
					{
						id: 7,
						src: require('../../assets/service/platform/3-3-8.png'),
					},
					{
						id: 8,
						src: require('../../assets/service/platform/3-3-9.png'),
					},
					{
						id: 9,
						src: require('../../assets/service/platform/3-3-10.png'),
					}
				],
				
				showid:0,//默认显示第一个 
				// checkIMG:'',
			}
		},
		watch:{
			
		},
		methods: {
			//切换显示的信息
			showInfo(e){
				this.showid = e;
				console.log("showid",this.showid)
				// console.log("SRC1",this.ThreeInfoData[this.showid].src_checked)
				// Object.assign(this.$data, this.$options.data());
				this.ThreeInfoData[this.showid].src = this.ThreeInfoData[this.showid].src_checked
			},
		},
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/platform.css");
</style>
