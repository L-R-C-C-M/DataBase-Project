import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },

  // 寻人资讯主界面
  {
    path: "/report",
    name: "report",
    component: () => import("../views/ReportView.vue"),
  },
  // 寻人资讯主页面跳转到详情页
  {
    path: "/report/about",
    name: "/report/about",
    component: () => import("../views/AboutReport.vue"),
  },
  // 相关部门信息界面
  {
    path: "/department",
    name: "department",
    //重定向，默认显示第一个页面
    redirect:"/department/1-1",
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
        path:"detail",
        component: () => import('../views/DepartmentDetailView.vue'),
      }
      
      // {
      //   path: "1-1",
      //   component: () => import('../views/DepartmentInfoView.vue'),
      //   children:[{
      //     path:"detail",
      //     component: () => import('../views/DepartmentDetailView.vue'),
      //   }
      //   ]

      // },
      // {
      //   path: "1-2",
      //   component: () => import('../views/DepartmentInfoView.vue')
      // },
      // {
      //   path: "1-3",
      //   component: () => import('../views/DepartmentInfoView.vue')
      // },
      // {
      //   path: "1-4",
      //   component: () => import('../views/DepartmentInfoView.vue')
      // }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
