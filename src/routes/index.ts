import { SignIn, SignUp, Home, Settings } from '../views'

export const mainRoute = [
  {
    path: '/member/login',
    name: 'SignIn',
    component: SignIn,
    icon: '',
    children: [],
  },
  {
    path: '/member/reg',
    name: 'SignUp',
    component: SignUp,
  },
  // {
  //   pathname: '/404',
  //   component: NotFound,
  // },
]

// export const adminRoute = [
//     {
//         pathname: '/admin/dashboard',
//         component: Dashboard,
//         title: '仪表盘',
//         isNav: true,
//         icon: DashboardOutlined
//     },
//     {
//         pathname: '/admin/product',
//         component: Product,
//         title: '产品管理',
//         isNav: true,
//         exact: true,
//         icon: ProfileOutlined
//     },
//     {
//         pathname: '/admin/article',
//         component: ArticleList,
//         title: '文章管理',
//         isNav: true,
//         exact: true,
//         icon: ProfileOutlined
//     },
//     {
//         pathname: '/admin/article/edit/:id',
//         component: ArticleEdit
//     },
//     {
//         pathname: '/admin/notification',
//         component: Notifications
//     },
//     {
//         pathname: '/admin/settings',
//         component: Settings,
//         title: '系统设置',
//         isNav: true,
//         icon: SettingOutlined
//     }
// ]
