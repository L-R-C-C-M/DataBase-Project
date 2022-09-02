import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import("../views/HomeView.vue")
  // },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/addInfo',
    name: 'addInfo',
    component: () => import('../views/AddInfoView.vue')
  },
  {
    path: '/cover',
    name: 'cover',
    component: () => import('../views/CoverView.vue')
  },
  {
    path: '/report',
    name: 'report',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "report" */ '../views/ReportView.vue')
  },
  {
    path: '/missingpersonInfo',
    name: 'missingpersonInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "report" */ '../views/MissingpersonInfoView.vue')
  },
  {
    path: '/up_missingperson',
    name: 'up_missingperson',
    component: () => import('../views/UpmissingpersonView.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/AboutView.vue")
  // },
  {
    path: '/VolunOver',
    name: '志愿活动概览',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/VolunOverView.vue"),
    //meta: {
    //isUseCache: false, // 默认不缓存
    //keepAlive: true // 是否使用 keep-alive
    //}
  },
  {
    path: '/volunAct',
    name: 'volunAct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/VolunActView.vue")
  },
  {
    path: '/volunInst',
    name: 'volunInst',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/VolunInstView.vue")
  },
  {
    path: '/volunActInfo',
    name: 'volunActInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/VolunActInfoView.vue")
  },
  {
    path: '/volunInstInfo',
    name: 'volunInstInfo',
    component: () => import("../views/VolunInstInfoView.vue")
  },

  // 寻人资讯主界面
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  // // 寻人资讯主页面跳转到详情页
  // {
  //   path: "/report/about",
  //   name: "/report/about",
  //   component: () => import("../views/AboutReport.vue"),
  // },
  // 寻人资讯主页面跳转到详情页
  {
    path: "/newsInfo",
    name: "newsInfo",
    component: () => import("../views/NewsInfoView.vue"),
  },
  // 相关部门信息界面
  {
    path: "/department",
    name: "department",
    //重定向，默认显示第一个页面
    redirect: "/department/1-1",
    component: () => import("../views/DepartmentView.vue"),
    children: [
      {
        //定义路由参数
        path: ":dpt_id",
        component: () => import('../views/DepartmentInfoView.vue')
      },
      //接收参数作为路径
      {
        path: "{{ $route.params.dpt_id }}",
        component: () => import('../views/DepartmentInfoView.vue'),

      },
      {
        path: "detail",
        component: () => import('../views/DepartmentDetailView.vue'),
      }

    ]
  },
  {
    path: '/tempBackstage',
    name: 'tempBackstage',
    component: () => import('../views/tempBackstage.vue'),
    children: [
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
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
