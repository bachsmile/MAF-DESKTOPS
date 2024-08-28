import edu from '@/router/admin/edu.router'

export default [
  // quản lý admin
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/admin/dashboard/Index.vue'),
      },

      // user
      ...edu,
    ],
  },


]
