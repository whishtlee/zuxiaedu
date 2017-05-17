// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'        // 路由列表
import iView from 'iview'
import Util from './libs/util'       // 引入插件
import 'iview/dist/styles/iview.css';// 使用 CSS

// 加载iView
Vue.use(iView);

// 定义axios请求
Vue.prototype.ajax = Util.ajax;

Vue.config.productionTip = false

// 路由配置

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
