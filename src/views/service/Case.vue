<template>
	<!-- 服务中心 -->
	<div id="container_case">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/service/case/0-banner.jpg">
			</div>
		</div>

		<div class="studentInfo">
			<div>
				<span class="Title">学员案例</span>
			</div>

			<div class="student_content">
				<ul class="student_ul">
					<li class="student_li" v-for="item in studentInfoData" :key="item.id">
						<img class="student_img" :src="item.src">
					</li>
				</ul>
			</div>
		</div>

		<div class="schoolInfo">
			<div>
				<span class="Title">合作院校</span>
				<p class="Title_content">目前已和全国多所高校建立合作关系（以下为部分高校）</p>
			</div>

			<div class="school_content">
				<ul class="school_ul">
					<li class="school_li" v-for="item in schoolInfoData" :key="item.id">
						<img class="school_img" :src="item.src">
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
				studentInfoData: [{
						id: 0,
						src: require('../../assets/service/case/1-1.jpg'),
					},
					{
						id: 1,
						src: require('../../assets/service/case/1-2.jpg'),
					},
					{
						id: 2,
						src: require('../../assets/service/case/1-3.jpg'),
					},
					{
						id: 3,
						src: require('../../assets/service/case/1-4.jpg'),
					}
				],
				schoolInfoData: [{
						id: 0,
						src: require('../../assets/service/case/2-1.jpg'),
					},
					{
						id: 1,
						src: require('../../assets/service/case/2-2.jpg'),
					},
					{
						id: 2,
						src: require('../../assets/service/case/2-3.jpg'),
					},
					{
						id: 3,
						src: require('../../assets/service/case/2-4.jpg'),
					}, {
						id: 4,
						src: require('../../assets/service/case/2-5.jpg'),
					}, {
						id: 5,
						src: require('../../assets/service/case/2-6.jpg'),
					}, {
						id: 6,
						src: require('../../assets/service/case/2-7.jpg'),
					}, {
						id: 7,
						src: require('../../assets/service/case/2-8.jpg'),
					}
				],
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/case.css");
</style>
