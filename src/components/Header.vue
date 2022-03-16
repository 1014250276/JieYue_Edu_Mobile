<template>
	<!-- <div>头部</div> -->
	<div id="content">
		<div id="left">
			<span>
				<img class="logo" src="../assets/service/case/logo.png" />
			</span>
		</div>
		<div id="right">
			<span v-if="!isShow">
				<img @click="menu_open()" class="menu" src="../assets/service/case/按钮图标.png" />
			</span>
			<span v-else>
				<div @click="menu_close()" class="el-icon-close menu" style="color:rgba(0, 168, 255, 1);"></div>
			</span>
		</div>
		<div class="Header_navlist_mark" v-show="isShow"></div>
		<div class="menu_content" v-show="isShow">
			<el-menu :default-active="activeIndex" :unique-opened="true" class="el-menu-vertical-demo"
				@open="handleOpen" @close="handleClose">
				<!-- <el-menu default-active="1" :unique-opened="true"
				class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"> -->
				<el-menu-item index="1" @click="jump('/')">
					<span slot="title" style="text-align: left;">首页</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<span>关于我们</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1" @click="jump('/state')" style="text-align: center;">企业简介
						</el-menu-item>
						<el-menu-item index="2-2" @click="jump('/cost')" style="text-align: center;">文化与价值
						</el-menu-item>
						<el-menu-item index="2-3" @click="jump('/hiring')" style="text-align: center;">人才招聘
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<span>产品服务</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="3-1" @click="jump('/platform')" style="text-align: center;">平台服务
						</el-menu-item>
						<el-menu-item index="3-2" @click="jump('/case')" style="text-align: center;">平台案例</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="4" @click="jump('/dynamic')">
					<span slot="title">新闻中心</span>
				</el-menu-item>
				<el-menu-item index="5" @click="jump('/me')">
					<span slot="title">联系我们</span>
				</el-menu-item>
				<el-menu-item index="6" @click="jump('/center')">
					<span slot="title">服务中心</span>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				// isShow:true,
				activeIndex: "1",
				// activeIndex:this.$store.state.menuid
			};
		},
		watch: {
			//弹出导航栏时，禁止页面滚动
			isShow(val) {
				// console.log("val:",val)
				var mo = function(e) {
					e.preventDefault();
				};
				//菜单导航栏关闭时 false
				if (!val) {
					document.body.style.overflow = ''; //出现滚动条
					document.removeEventListener("touchmove", mo, false);
				}
				//菜单导航栏打开时 true
				else {
					document.body.style.overflow = 'hidden'; //隐藏滚动条
					document.addEventListener("touchmove", mo, false); //禁止页面滑动
				}
			},
			//监听activeIndex选中的编号
			// activeIndex(val){
			// 	console.log("选中的编号val:",val)
			// }
		},
		created() {
		},
		mounted() {
		},
		methods: {
			//打开菜单
			menu_open() {
				this.isShow = true;
			},
			//关闭菜单
			menu_close() {
				this.isShow = false;
			},
			//菜单路由跳转
			jump(e) {
				this.$router.push(e);
				this.isShow = false
				// console.log(e)
				//路由跳转后回到顶部
				this.$nextTick(() => {
					window.scroll(0, 0);
				})
			},
			//菜单激活回调
			// handleSelect(key, keyPath) {
			// 	// debugger
			// 	// console.log(key, keyPath);
			// 	this.$store.commit('menuid_change', key)
			// 	// console.log("menuid:",this.$store.state.menuid)
			// 	this.activeIndex = this.$store.state.menuid
			// },
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			}
		},
	};
</script>

<style>
	@import url("../assets/css/header.css");
</style>
