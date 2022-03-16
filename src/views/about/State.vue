<template>
	<!-- 企业简介 -->
	<div id="container_state">
		<div class="banner_state">
			<div>
				<img class="banner1_state" src="../../assets/about/state/banner.jpg">
			</div>
		</div>

		<div class="OneInfo_state" v-for="item in InfoList" :key="item.id">
			<span class="info1_state">{{item.text.replace(/\s*/g,"")}}</span>
		</div>

		<div class="TowInfo_state">
			<!-- <div> -->
				<img class="info2_img1_state" src="../../assets/about/state/1.png">
				<div class="info2_img2_state"></div>
				<span class="info2_text1_state">傅湘平</span>
				<span class="info2_text2_state">杰越创始人</span>
			<!-- </div> -->
		</div>

		<div class="ThreeInfo_state">
			<div>
				<img class="info3_img_state" src="../../assets/about/state/2.png">
				<span class="info3_text_state">{{info}}</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				info: `傅湘平先生（创始人）十一年项目研发经验，曾就职于IBM、拓维等上市公司担任架构师/开发主管等职位；
					熟悉PHP开源系统的二次开发； 精通Laravel、symfony、TP、ZF等开源框架； 熟悉Linux下参数配置及优化，
					具备大容量高并发电商应用架构设计和开发经验； 专注于大数据WEB架构； 有Hadoop大数据云平台平台项目架构
					经验；丰富的企业专业培训经验。`,
			};
		},
		methods: {

		},
	};
</script>

<style scoped="scoped">
	@import url("../../assets/css/state.css");
</style>
