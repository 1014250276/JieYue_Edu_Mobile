<template>
	<div id="container_dynamic">
		<div class="banner">
			<div>
				<img class="banner1" src="../../assets/news/dynamic/0-banner.jpg">
			</div>
		</div>

		<div class="NewInfo">
			<div class="NewInfo_title">
				<p>新闻中心</p>
			</div>

			<div class="NewInfo_title2">
				<span class="empty">
					<img class="empty_img" src="../../assets/news/dynamic/1.jpg">
				</span>
				<span class="small_title">企业动态</span>
			</div>

			<div class="NewInfo_List">
				<ul class="NewInfo_List_ul">
					<li class="NewInfo_List_li" @click="jumpDetail(item)"
					v-for="item in NewInfoListData" :key="item.id">
						<img class="NewInfo_List_img" :src="item.src">
						<div class="NewInfo_List_right">
							<p class="right_info txt1">{{item.title}}</p>
							<p class="right_info txt2">{{item.time}}</p>
							<p class="right_info txt3">{{item.content}}</p>
						</div>
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
				NewInfoListData: [{
						id: 0,
						src: require('../../assets/news/dynamic/2-1.png'),
						title: '荣耀见证实力',
						time: '2021-11-03',
						content: '恭喜杰越教育荣获腾讯课堂金牌机构！'
					},
					{
						id: 1,
						src: require('../../assets/news/dynamic/2-2.png'),
						title: '6周年庆典',
						time: '2021-10-30',
						content: '新的征程新的起点！'
					},
					{
						id: 2,
						src: require('../../assets/news/dynamic/2-3.png'),
						title: '杰越教育/教师专访',
						time: '2021-10-24',
						content: '第九期：长沙总部-芥茉老师 做一盏灯 只为照亮学员们前行的路！'
					},
					{
						id: 3,
						src: require('../../assets/news/dynamic/2-4.png'),
						title: '杰越教育/教师专访',
						time: '2021-10-19',
						content: '第八期：长沙总部-Lisa老师 天然的师爱始终是坚守初心，不断解决问题的核心力量！'
					},
					{
						id: 4,
						src: require('../../assets/news/dynamic/2-5.png'),
						title: '杰越教育/教师专访',
						time: '2021-10-13',
						content: '第七期：深圳分公司-大古老师 扬长趋极见本真~！'
					},
					{
						id: 5,
						src: require('../../assets/news/dynamic/2-6.png'),
						title: '杰越教育/教师专访',
						time: '2021-10-06',
						content: '第六期：长沙总部-芝诺老师 精益求精，于挑战中不断收获~'
					},
					{
						id: 6,
						src: require('../../assets/news/dynamic/2-7.png'),
						title: '杰越教育/教师专访',
						time: '2021-09-25',
						content: ' 第五期：深圳分公司星沉老师 以师者之德树人，以仁者之爱育人~'
					},
					{
						id: 7,
						src: require('../../assets/news/dynamic/2-8.png'),
						title: '教师节快乐',
						time: '2021-09-11',
						content: '以灯传灯，心灯不灭 | 祝杰越教育老师教师节快乐'
					},
					{
						id: 8,
						src: require('../../assets/news/dynamic/2-9.png'),
						title: '杰越教育/教师专访',
						time: '2021-09-08',
						content: '第四期:长沙总部教主老师 陪伴是最长情的告白 坚守是最美好的教育~'
					},
					{
						id: 9,
						src: require('../../assets/news/dynamic/2-10.png'),
						title: '设计作品作品大赛',
						time: '2021-09-06',
						content: '杰越教育喊你来投票了，快来选出你心中的C位吧!'
					},
					{
						id: 10,
						src: require('../../assets/news/dynamic/2-11.png'),
						title: '教师节特别献礼',
						time: '2021-09-01',
						content: '杰越教育教师节特别献礼——全国设计大赛作品放送'
					},
					{
						id: 11,
						src: require('../../assets/news/dynamic/2-12.png'),
						title: '热烈庆祝长沙分公司成立',
						time: '2018-08-21',
						content: '喜讯：新主场，新高度，新未来！热烈庆祝杰越教育集团长沙分公司成立庆典圆满举行!'
					}
				]
			}
		},
		// mounted() {
		// 	//页面刷新时，回到顶部
		// 	this.$nextTick(() => {
		// 		window.scroll(0, 0);
		// 	})
		// },
		methods:{
			//跳转至新闻详情 路由跳转带参 query:{}
			jumpDetail(e){
				const query = {
					id : e.id,
					content : e.content,
					src : e.src,
					time : e.time,
					title : e.title
				}
				// console.log("query:",JSON.stringify(query))
				// this.$router.push(e)
				this.$router.push({path: '/newsdetail', query: query});
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/dynamic.css");
</style>
