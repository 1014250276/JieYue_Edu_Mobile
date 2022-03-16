<template>
	<div id="container_hiring">
		<!-- 人才招聘 -->
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/about/hiring/0-banner.jpg">
			</div>
		</div>
		
		<div class="Imgs">
			<ul class="Imgs_ul">
				<li class="Imgs_li" v-for="item in vision_imgList" :key="item.id" 
				@click="change(item.id)">
					<img class="content_img" :src="item.idView">
					<div class="content_img_box"></div>
					<div class="content_img_txt">{{item.text}}</div>
					<div class="content_line"></div>
					<!-- <div :class="{content_line:isAction}"></div> -->
				</li>
			</ul>
		</div>
		
		<div class="Infos">
			<!-- 关于杰越部分 -->
			<div v-show="isShowinfo1" class="info1">
				<div class="info1_title">关于杰越</div>
				<div class="OneInfo" v-for="item in InfoList" :key="item.id">
					<span class="info1">{{item.text.replace(/\s*/g,"")}}</span>
				</div>
				<div class="info1_button">
					<el-button>了解详情</el-button>
				</div>
			</div>
			
			<!-- 核心竞争力部分 -->
			<div v-show="isShowinfo2" class="info2">
				<div class="info2_content1" v-for="item in Info2List" :key="item.id">
					<img class="info2_src" :src="item.src">
					<p class="info2_title">{{item.title}}</p>
					<div class="info2_content">{{item.content}}</div>
				</div>
				<div class="info1_button">
					<el-button>了解详情</el-button>
				</div>
			</div>
			
			<!-- 文化价值观部分 -->
			<div v-show="isShowinfo3" class="info3">
				<div class="">
					<img class="info3_img" src="../../assets/about/hiring/3-1.png">
				</div>
				<div class="info1_button">
					<el-button>了解详情</el-button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				vision_imgList:[
					{
						id: 0,
						idView: require('../../assets/about/hiring/1.png'),
						text:'关 于 杰 越'
					},
					{
						id: 1,
						idView: require('../../assets/about/hiring/2.png'),
						text:'核心竞争力'
					},
					{
						id: 2,
						idView: require('../../assets/about/hiring/3.png'),
						text:'文化价值观'
					}
				],
				
				isShowinfo1:true,//关于杰越
				isShowinfo2:false,//核心竞争力
				isShowinfo3:false,//文化价值观
				InfoList: [{
						id: 0,
						text: `杰越教育是六星旗下在线教育美术设计类品牌，以“为每个互联网人提升竞争力”为使命，
						旨在帮助学员通过在线学习的方式提升技术技能，加强核心竞争力，实现高薪梦想。`
					},
					{
						id: 1,
						text: `杰越教育成立于2018年，是一家专注于高素质软件开发以及平面设计、美术绘画人才的培训，
						与培养的线上教育公司及企业信息化解决方案提供商，主要业务范畴为IT类目在线技术培训、平面设计
						培训、彩铅国画书画美术培训以及软件项目研发与软件定制服务。 目前在深圳 、成都等地开设有分公司
						，开设近20门热门课程：平面设计、3D模型、插画、原画、播音主持、配音、影视后期、彩铅、国画、
						书画、素描、Python、PHP、C/C++、WEB前端、大数据golang、就业指导等。`
					},
					{
						id: 2,
						text: `杰越教育聚集国内100+一线的讲师和技术团队，团队成员项目经验均在7年以上，运用丰富的，
						项目经验，精心研发出最新、最优质、最具实践力的课程体系，内容紧跟IT行业潮流，理论通俗易懂，
						并结合实际应用场景讲授经典设计思想。`
					}
				],
				Info2List:[
					{
						id:0,
						src: require('../../assets/about/hiring/2-1.png'),
						title:'教学服务一体化',
						content:'专业老师课后答疑指导，售后跟踪快速响应'
					},
					{
						id:1,
						src: require('../../assets/about/hiring/2-2.png'),
						title:'课程种类多元化',
						content:'IT互联网/设计创作/兴趣艺术等各大学科体系，让学习简单有序'
					}
				],
			}
		},
		methods: {
			change(e){
				// console.log(e)
				switch(e){
					case 0:
						this.isShowinfo1 = true
						this.isShowinfo2 = false
						this.isShowinfo3 = false
						
						// console.log("this",this.$el)
						// this.$(".content_line").css("background-color","orange")
						break;
					case 1:
						this.isShowinfo1 = false
						this.isShowinfo2 = true
						this.isShowinfo3 = false
						break;
					case 2:
						this.isShowinfo1 = false
						this.isShowinfo2 = false
						this.isShowinfo3 = true
						break;
				}
				
			}
			
		},
	};
</script>

<style scoped="scoped">
	@import url("../../assets/css/hiring.css");
</style>
