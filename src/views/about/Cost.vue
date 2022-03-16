<template>
	<div id="container_cost">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/about/cost/0-banner.jpg">
			</div>
		</div>

		<!-- 使命 -->
		<div class="mission">
			<div class="title">
				<p>
					<span class="title_CN">使命</span>
					<span class="title_EN">/ mission</span>
				</p>
				<p class="title_Msg">为每个IT人提升竞争力</p>
			</div>
			
			<div class="mission_imgs">
				<img class="mission_img" src="../../assets/about/cost/1.jpg">
			</div>
		</div>

		<!-- 愿景 -->
		<div class="vision">
			<div class="title">
				<p>
					<span class="title_CN">愿景</span>
					<span class="title_EN">/ vision</span>
				</p>
				<p class="title_Msg">成为最值得信任的互联网企业</p>
			</div>
			
			<div class="vision_content">
				<ul class="vision_ul">
					<li class="vision_li" v-for="item in vision_imgList" :key="item.id" >
						<img class="vision_img" :src="item.idView">
					</li>
				</ul>
			</div>
		</div>

		<!-- 价值观 -->
		<div class="values">
			<div class="title">
				<p>
					<span class="title_CN">价值观</span>
					<span class="title_EN">/ values</span>
				</p>
			</div>
			
			<div class="values_tabs">
				<el-tabs type="border-card" >
					<el-tab-pane v-for="item in values_InfoList" :key="item.id"  :label="item.label">
						<img class="values_img" :src="item.src">
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>

		<!-- 管理概念 -->
		<div class="management">
			<div class="title">
				<p>
					<span class="title_CN">管理概念</span>
					<span class="title_EN">/ management</span>
				</p>
				<p class="title_Msg">以人为本，高效创新</p>
			</div>
			
			<div class="management_content">
				<ul class="management_ul">
					<li class="management_li">
						<div style="">
							<p><img class="management_smallimg" src="../../assets/about/cost/4-1.jpg"></p>
							<p><img class="management_smallimg" src="../../assets/about/cost/4-2.jpg"></p>
						</div>
					</li>
					<li>
						<img class="management_largeimg" src="../../assets/about/cost/4-3.jpg">
					</li>
					<li>
						<img class="management_img" src="../../assets/about/cost/4-4.jpg">
					</li>
					<li>
						<img class="management_img" src="../../assets/about/cost/4-5.jpg">
					</li>
				</ul>
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
						idView: require('../../assets/about/cost/2-1.jpg')
					},
					{
						id: 1,
						idView: require('../../assets/about/cost/2-2.jpg')
					},
					{
						id: 2,
						idView: require('../../assets/about/cost/2-3.jpg')
					},
					{
						id: 3,
						idView: require('../../assets/about/cost/2-4.jpg')
					},
				],
				values_InfoList:[
					{
						id: 0,
						label:'坦诚',
						src: require('../../assets/about/cost/3-3.jpg')
					},
					{
						id: 1,
						label:'利他',
						src: require('../../assets/about/cost/3-4.jpg')
					},
					{
						id: 2,
						label:'合作',
						src: require('../../assets/about/cost/3-5.jpg')
					},
					{
						id: 3,
						label:'创新',
						src: require('../../assets/about/cost/3-6.jpg')
					},
				]
			}
		},
		methods: {

		},
	};
</script>

<style scoped="scoped">
	@import url("../../assets/css/cost.css");
</style>
