<template>
	<!-- 联系我们 -->
	<div id="container_me">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/me/0-banner.jpg">
			</div>
		</div>

		<div class="address_head">
			<div>
				<img class="address_head_img" src="../../assets/me/1.png">
			</div>
		</div>

		<div class="address_sons">
			<ul class="address_sons_ul">
				<li class="address_sons_li" v-for="item in AddressInfo" :key="item.id">
					<img class="AddressInfo_img" :src="item.src">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				AddressInfo: [{
					id: 0,
					src: require('../../assets/me/2.png'),
				},
				 {
				 	id: 1,
				 	src: require('../../assets/me/3.png'),
				 },
				 {
				 	id: 2,
				 	src: require('../../assets/me/4.png'),
				 },
				 {
				 	id: 3,
				 	src: require('../../assets/me/5.png'),
				 },]
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/me.css");
</style>
