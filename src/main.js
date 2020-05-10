import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../src/assets/js/rem'
import 'amfe-flexible'
import '../public/globass.css'
import './assets/icon/iconfont.css'
import './assets/css/changevant.css'
import  VueLazyload  from  'vue-lazyload'
import  PageLoding   from  '../src/components/loding/PageLoding.vue'
 
 Vue.use(PageLoding)
Vue.config.productionTip = false
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://120.53.13.253:4000/'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.use(VueLazyload,{
  loading:"https://s2.ax1x.com/2019/09/08/n8qAAS.gif"
})


// Vue.filter('strdata',function(val){
//   if(val>100000000){
//     val=((val/100000000).toFixed(1))+'亿'
//   }
//   return val
// })
	
import '../src/assets/styles/border.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/global.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
