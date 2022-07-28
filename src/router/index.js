import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/VolunOver',
    name: '志愿活动概览',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VolunOverView.vue'),
    //meta: {
    //isUseCache: false, // 默认不缓存
    //keepAlive: true // 是否使用 keep-alive
    //}
  },
  {
    path: '/Volun',
    name: '志愿活动',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VolunView.vue')
  },
  {
    path: '/Organ',
    name: '志愿机构',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrganView.vue')
  },
  {
    path: '/VolunAct',
    name: '志愿活动详情',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VolunActView.vue')
  },
  {
    path: '/VolunOrgan',
    name: '志愿机构详情',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VolunOrganView.vue')
  },
  //管理员后台//
  {
    path: '/backstage',
    name: 'backstage',
    component: () => import('../views/BackstageView.vue'),
    children: [
      {
        path: 'userManagement',
        name: 'userManagement',
        component: () => import('../views/Backstage/UserManagement.vue')
      },
      {
        path: 'volManagement',
        name: 'volManagement',
        component: () => import('../views/Backstage/VolManagement.vue')
      },
      {
        path: 'releasedNews',
        name: 'releasedNews',
        component: () => import('../views/Backstage/ReleasedNews.vue')
      },
      {
        path: 'volReview',
        name: 'volReview',
        component: () => import('../views/Backstage/VolReview.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('../views/Backstage/Reports.vue')
      },
      {
        path: "InformationRelease",
        component: () => import('../views/Backstage/InformationRelease.vue')
      },
      {
        path: "PersonalInfo",
        component: () => import('../views/Backstage/PersonalInfo.vue')
      },
    ]
  },
  {
    path: '/mainmenu',
    name: 'mainmenu',
    component: () => import('../views/MainmenuView.vue')
  },
  //普通用户后台//
  {
    path: '/UserBackstage',
    name: 'UserBackstage',
    component: () => import('../views/UserBackStageView.vue'),
    children: [
      {
        path: "PersonalInfo",
        component: () => import('../views/Backstage/PersonalInfo.vue')
      },
      {
        path: "UserHomePage",
        component: () => import('../views/Backstage/UserHomePage.vue')
      }
    ]
  },
  //志愿者后台//
  {
    path: '/VolBackstage',
    name: 'VolBackstage',
    component: () => import('../views/VolBackStageView.vue'),
    children: [
      {
        path: "PersonalInfo",
        component: () => import('../views/Backstage/PersonalInfo.vue')
      },
      {
        path: "VolHomePage",
        component: () => import('../views/Backstage/VolHomePage.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
