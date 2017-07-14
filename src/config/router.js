import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'   //主页
import Class from '@/view/class' //分类
import Shop from '@/view/shop'   //购物车
import User from '@/view/user'   //我的
import Search from '@/view/search'   //搜索
import Login from '@/view/login'     //登录
import Order from '@/view/order'     //我的订单
import ShopDetail from '@/view/shopDetail'   //商品详情页
import favTab from '@/view/fav'  //收藏宝贝
import Bonus from '@/view/bonus'  //红包优惠券
import FootTab from '@/view/foot'  //足迹

import ClassTab from '@/view/home/children/ClassTab' //首页分页
import IndexTab from '@/view/home/children/IndexTab'

import typeTab from '@/view/class/children/typeTab' //分类页分页
import brandTab from '@/view/class/children/brandTab'

import AllTab from '@/view/order/children/all'  //我的订单分页
import PayTab from '@/view/order/children/pay'
import RefundTab from '@/view/order/children/refund'
import SendTab from '@/view/order/children/send'
import TakeTab from '@/view/order/children/take'

import canTab from '@/view/bonus/children/can' //红包优惠券页分页
import employTab from '@/view/bonus/children/employ'
import overdueTab from '@/view/bonus/children/overdue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/index/2'  //重定向
    },
    {
      path: '/home',
      redirect:'/home/index/2',
      component: Home,
      children:[
        {
          path: 'index/:id',
          component: IndexTab,
        },
        {
          path: 'class/:id',
          component: ClassTab,
        }
      ]
    },
    {
      path: '/classify',
      redirect:'/classify/typetab',
      name: 'Class',
      component: Class,
      children:[
        {
          path: 'typetab',
          component: typeTab,
        },
        {
          path: 'brandtab',
          component: brandTab,
        }
      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      beforeEnter:(to,from,next) =>{
        var user=window.localStorage["userInfor"];
        if(!user){
          next({path:'/login',query:{"to":to.name}});
        }else{
          next();
        }
      }
    },
    {
      path: '/login',
      component: Login  
    },
    {
      path: '/shopDetail/:ProductID',
      name: 'shopDetail', 
      component: ShopDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/order',
      redirect:'/order/all',
      name: 'Order',
      component: Order,
      children:[
        {
          path: 'all',
          component: AllTab,
        },
        {
          path: 'pay',
          component: PayTab,
        },
        {
          path: 'refund',
          component: RefundTab,
        },
        {
          path: 'send',
          component: SendTab,
        },
        {
          path: 'take',
          component: TakeTab,
        }
      ]
    },
    {
      path: '/fav',
      name: 'favTab',
      component: favTab
    },
    {
      path: '/bonus',
      redirect:'/bonus/can',
      name: 'Bonus',
      component: Bonus,
      children:[
        {
          path: 'can',
          component: canTab,
        },
        {
          path: 'employ',
          component: employTab,
        },
        {
          path: 'overdue',
          component: overdueTab,
        }
      ]
    },
    {
      path: '/foot',
      name: 'FootTab',
      component: FootTab
    }
  ]
})
