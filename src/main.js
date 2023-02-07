import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";
import './styles/index.less';

// TODO 手动按需引入Toast
import { Toast } from "vant"
import 'vant/lib/toast/style'
Vue.use(Toast)

// TODO VConsole
import VConsole from 'vconsole';
if (process.env.NODE_ENV === 'development') {
  const vConsole = new VConsole();
  Vue.use(vConsole);
}

// TODO 路由变化路径保存
router.beforeEach(async(to, from, next) => {
  store.commit('common/setRouteToPath', to.path);
  store.commit('common/setRouteFromPath', from.path);
  next();
});

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
