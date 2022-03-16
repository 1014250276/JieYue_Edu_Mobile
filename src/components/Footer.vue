<template>
	<div id="foot_content">
		<div class="foot1">
			<ul class="foot1_ul">
				<li class="foot1_li" @click="jump('/state')">
					<span>关于我们</span>
				</li>
				<li class="foot1_li" @click="jump('/platform')">
					<span>产品服务</span>
				</li>
				<li class="foot1_li" @click="jump('/dynamic')">
					<span>新闻中心</span>
				</li>
			</ul>
		</div>
		
		<div class="foot2">
			<ul>
			  <li class="big">联系我们</li>
			  <li class="foot_phone">客服电话：0731-85573019</li>
			  <li class="foot_week">周一至周六 早9:00 - 22：00</li>
			</ul>
		</div>
		
		<div class="foot3">
			<ul>
			  <li class="big">品牌合作及咨询</li>
			  <li class="foot_phone">客服电话：0731-85573019</li>
			  <li class="foot_week">周一至周六 早9:00 - 17：30</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			jump(e) {
				this.$router.push(e);
				// this.isShow = false
				console.log(e)
				//路由跳转后回到顶部
				this.$nextTick(() => {
					window.scroll(0, 0);
				})
			},
		},
	};
</script>

<style>
	@import url("../assets/css/footer.css");
</style>
