<template>
	<!-- 服务中心 -->
	<div id="container_center">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/product/center/0-banner.jpg">
			</div>
		</div>

		<div class="center_explain">
			<div>
				<p class="explain_txt">为更好的保障学员的自身权益，</p>
				<p class="explain_txt">杰越教育将正式推出受理学员售后服务流程，</p>
				<p class="explain_txt">便于学员对相关问题进行了解。</p>
			</div>
		</div>

		<div class="contactway">
			<div class="contactway_main">
				<!-- <img class="title_icon" src="../../assets/product/center/3.png"> -->
				<div>
					<span class="title_txt">售后联系方式</span>
				</div>
			</div>
			<ul class="contactway_ul">
				<li class="contactway_li" v-for="item in ContactwayInfo" :key="item.id">
					<img class="contactway_bgimg" :src="item.src">
					<span class="contactway_txt">{{item.txt}}</span>
				</li>
			</ul>
		</div>

		<div class="secret">
			<div class="contactway_main">
				<!-- <img class="title_icon" src="../../assets/product/center/4.png"> -->
				<span class="title_txt">隐私保护</span>
			</div>
			<div>
				<img class="secret_bgimg" src="../../assets/product/center/2.png">
				<span class="secret_info">
					{{secretInfo}}
				</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				ContactwayInfo: [{
						id: 0,
						src: require('../../assets/product/center/1-1.png'),
						txt: "未在售后办理合同的同学联系对应的售前老师QQ/微信"
					},
					{
						id: 1,
						src: require('../../assets/product/center/1-2.png'),
						txt: "已经办理合同的同学联系售后老师的QQ/微信"
					},
					{
						id: 2,
						src: require('../../assets/product/center/1-3.png'),
						txt: `联系售后服务中心电话：0731-89729357或者19173132534
						（电话接听时间：下午13:00-晚上22:00）`
					}
				],
				secretInfo: `湖南杰越教育科技有限公司及旗下各关联分公司（以下统称“我们”）
				高度重视广大用户的个人信息安全与隐私保护，我们向用户提供方便快捷的产品和
				服务的同时，致力于提升信息处理的透明度，增强您对信息管理的便捷性，保障您的
				信息安全。我们严格遵守法律法规，遵循隐私保护原则，我们尊重广大用户的隐私，
				未经用户的同意，我们不搜集用户的资料。对于因服务的需要而掌握的社交账号、
				电话、邮箱、信息和地址等我们承诺非经用户允许，不向任何第三方出售或提供。
				为您提供更加安全、可靠的产品与服务。`
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/center.css");
</style>
