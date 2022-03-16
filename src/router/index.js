import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [{
		// 首页
		path: '/',
		name: 'Home',
		meta:{
			id:'1'
		},
		component: () => import('@/views/home/Home')
	},
	{
		// 关于我们_企业简介
		path: '/state',
		name: 'State',
		meta:{
			id:'2-1'
		},
		component: () => import('@/views/about/State')
	},
	{
		// 关于我们_文化与价值
		path: '/cost',
		name: 'Cost',
		meta:{
			id:'2-2'
		},
		component: () => import('@/views/about/Cost')
	},
	{
		// 关于我们_人才招聘
		path: '/hiring',
		name: 'Hiring',
		meta:{
			id:'2-3'
		},
		component: () => import('@/views/about/Hiring')
	},
	{
		// 产品服务_平台服务
		path: '/platform',
		name: 'Platform',
		meta:{
			id:'3-1'
		},
		component: () => import('@/views/service/Platform')
	},
	{
		// 产品服务_平台案例
		path: '/case',
		name: 'Case',
		meta:{
			id:'3-2'
		},
		component: () => import('@/views/service/Case')
	},
	{
		// 新闻中心
		path: '/dynamic',
		name: 'Dynamic',
		meta:{
			id:'4'
		},
		component: () => import('@/views/news/Dynamic')
	},
	{
		// 联系我们
		path: '/me',
		name: 'Me',
		meta:{
			id:'5'
		},
		component: () => import('@/views/contact/Me')
	},
	{
		// 服务中心
		path: '/center',
		name: 'Center',
		meta:{
			id:'6'
		},
		component: () => import('@/views/product/Center')
	},
	// 新闻详情
	{
		path: '/newsdetail',
		name: 'Newsdetail',
		component: () => import('@/views/news/Newsdetail')
	},
]

const router = new VueRouter({
	// mode: 'history', //配置为history模式
	base: '/' + process.env.BASE_URL,
	routes
})

export default router
