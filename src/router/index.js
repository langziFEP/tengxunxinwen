import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import fot from '@/components/fot'
import yaowen from '@/components/yaowen'
import shipin from '@/components/shipin'
import tuijian from '@/components/tuijian'
import wo from '@/components/wo'
import yw1 from '@/components/yw1'
import redian from '@/components/redian'
import iphone from '@/components/iphone'
import xqlist from '@/components/xqlist'
import nextwo from '@/components/nextwo'
import denglu from '@/components/denglu'
import imgs from '@/components/imgs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fot',
      component: fot
    }, 
    {
      path: '/yaowen',
      name: 'yaowen',
      component: yaowen
    }, 
    {
      path: '/shipin',
      name: 'shipin',
      component: shipin
    }, 
    {
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian
    }, 
    {
      path: '/wo',
      name: 'wo',
      component: wo
    }, 
    {
      path: '/yw1',
      name: 'yw1',
      component: yw1
    }, 
    {
      path: '/redian',
      name: 'redian',
      component: redian
    }, 
    {
      path: '/iphone',
      name: 'iphone',
      component: iphone
    }, 
    {
      path: '/xqlist',
      name: 'xqlist',
      component: xqlist
    }, 
    {
      path: '/nextwo',
      name: 'nextwo',
      component: nextwo
    }, 
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    }, 
    {
      path: '/imgs',
      name: 'imgs',
      component: imgs
    }
  ]
})
