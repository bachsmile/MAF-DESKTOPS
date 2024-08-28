export default [
    {
        path: 'time-line',
        name: 'time-line',
        component: () => import('@/pages/education/time-line/TimeLine.vue'),
    },
    {
        path: 'time-line/create',
        name: 'time-line-create',
        component: () => import('@/pages/education/time-line/ModifyTimeLine.vue'),
    },
]
