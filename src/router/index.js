import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: '用户登录入口',
			component: resolve => require(['../components/login.vue'], resolve)
		}, {
			path: '/home',
			name: '首页',
			component: resolve => require(['../components/home.vue'], resolve),
			children: [ {
					path: '/student',
					name: '学生',
					component: resolve => require(['../components/student/index.vue'], resolve)
				}
			]
		}
	]
})
