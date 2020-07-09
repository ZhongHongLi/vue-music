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
import comMents from '@/components/commetspage/commetspage'
import mvPage from '@/components/mvPage/index.vue'
import logoinPageButton from '@/components/logoin/logoinPageButton'
import Recommenday from '@/components/home/Recommeday'
import singerPage from '@/components/singerPage/singerPage'
import radioStation from '@/components/radioStation/radioStation'
import classifiCation from '@/components/base/classifiCation'
import songSingle from '@/components/base/songSingle'
import radioCharts from '@/components/radioStation/radioCharts'
import baseList from '@/components/base/baseList'
import myVideo from '@/components/mybuttonTab/myVideo'
import langVan from '@/components/mybuttonTab/LangVan'
import searchResult from '@/components/search/serachsonglist/searchResult'
import album from '@/components/search/serachsonglist/components/album'
import song from '@/components/search/serachsonglist/components/song'
import videoList from '@/components/search/serachsonglist/components/videoList'
import playList from '@/components/search/serachsonglist/components/playList'
import user from '@/components/search/serachsonglist/components/user'
import artist from '@/components/search/serachsonglist/components/artist'
import userInfodetails from '@/components/mybuttonTab/components/userInfodetails'
// slibarNav
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/logoginbtn' },
    { path: '/logoin', component: Login },
    { path: '/home', component: Home },
    { path: '/seniority', component: Seninority },
    { path: '/albumPage', component: AlbumPage, name: 'albumpage' },
    { path: '/songlist', component: songlist },
    { path: '/search', component: Search },
    { path: '/hotsearch', component: HotSearch },
    { path: '/searchsonglist', component: SerachsongList },
    { path: '/serachinput', component: SerachInput },
    { path: '/slidernav', component: SliderNav },
    { path: '/mymusic', component: mymusic },
    { path: '/accounts', component: accountS },
    { path: '/friends', component: friendS },
    { path: '/comments', component: comMents, name: 'comments' },
    { path: '/mvpage', component: mvPage, name: 'mvpage' },
    { path: '/logoginbtn', component: logoinPageButton },
    { path: '/recommenday', component: Recommenday },
    { path: '/singerpage', component: singerPage },
    { path: '/raduostation', component: radioStation },
    { path: '/classification', component: classifiCation },
    { path: '/songsingle', component: songSingle },
    { path: '/radiocharts', component: radioCharts },
    { path: '/baselist', component: baseList },
    { path: '/myvideo', component: myVideo },
    { path: '/langVan', component: langVan },
    {
        path: '/searchResult/:id',
        component: searchResult,
        redirect: '/searchsonglist/:id',
        children: [{
            //综合页面
            path: '/searchsonglist/:id',
            component: SerachsongList
        },
        {
            //单曲页面
            path: '/song/:id',
            component: song
        },
        {
            //视频页面
            path: '/video/:id',
            component: videoList
        },
        { //歌手
            path: '/artist/:id',
            component: artist
        },
        {
            //专辑页面
            path: '/album/:id',
            component: album
        },
        {
            //歌单页面
            path: '/playList/:id',
            component: playList
        },
        {
            //用户页面
            path: '/user/:id',
            component: user
        }
        ]
    },
    {
        path:'/userinfodeatil',
        component:userInfodetails,
        name:'userinfodeatil'
    }
]

const router = new VueRouter({
    routes
})

export default router
