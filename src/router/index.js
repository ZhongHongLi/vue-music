import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Seninority from '@/components/seninority/Seninority'
import AlbumPage from '@/components/page/AlbumPage'
import songlist from '@/components/songlistPage/songlist'
import Search from '@/components/search/Search'
import HotSearch from '@/components/search/hotSearch'
import SerachsongList from '@/components/search/serachsonglist/SerachsongList'
import SerachInput from '@/components/search/serachInput/serachInput'
import SliderNav from '@/components/sliderNav/sliderNav'
import Login from '@/components/logoin/logoin'
import mymusic from '@/components/mybuttonTab/myMusic'
import accountS from '@/components/mybuttonTab/accountS'
import friendS from '@/components/mybuttonTab/friendS'
import  comMents from  '@/components/commetspage/commetspage'
import  mvPage from  '@/components/mvPage/index.vue'
import logoinPageButton from '@/components/logoin/logoinPageButton'
import Recommenday from '@/components/home/Recommeday'
import singerPage from '@/components/singerPage/singerPage'
import radioStation from '@/components/radioStation/radioStation'
import classifiCation from '@/components/base/classifiCation'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/logoginbtn'},
  {path:'/logoin',component:Login},
  {path:'/home',component:Home},
  {path:'/seniority',component:Seninority},
  {path:'/albumPage',component:AlbumPage,name:'albumpage'},
  {path:'/songlist',component:songlist},
  {path:'/search',component:Search},
  {path:'/hotsearch',component:HotSearch},
  {path:'/searchsonglist/:id',component:SerachsongList},
  {path:'/serachinput',component:SerachInput},
  {path:'/slidernav',component:SliderNav},
  {path:'/mymusic',component:mymusic},
  {path:'/accounts',component:accountS},
  {path:'/friends',component:friendS},
  {path:'/comments',component:comMents,name:'comments'},
  {path:'/mvpage',component:mvPage,name:'mvpage'},
  {path:'/logoginbtn',component:logoinPageButton},
  {path:'/recommenday',component:Recommenday},
  {path:'/singerpage',component:singerPage},
  {path:'/raduostation',component:radioStation},
  {path:'/classification',component:classifiCation}
]

const router = new VueRouter({
  routes
})

export default router
