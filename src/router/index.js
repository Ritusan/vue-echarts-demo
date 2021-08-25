import { createRouter,createWebHashHistory} from "vue-router"

const echartsDemo1 = ()=> import ('../pages/echarts/demo1')
const echartsDemo2 = ()=> import ('../pages/echarts/demo2')
const echartsDemo3 = ()=> import ('../pages/echarts/demo3')
const echartsDemo4 = ()=> import ('../pages/echarts/demo4')
const echartsDemo5 = ()=> import ('../pages/echarts/demo5')
const echartsDemo6 = ()=> import ('../pages/echarts/demo6')

const routes = [
    {
        path: '/',
        name: 'echartsDemo1',
        component: echartsDemo1
    },
    {
        path: '/echartsDemo2',
        name: 'echartsDemo2',
        component: echartsDemo2
    },
    {
        path: '/echartsDemo3',
        name: 'echartsDemo3',
        component: echartsDemo3
    },
    {
        path: '/echartsDemo4',
        name: 'echartsDemo4',
        component: echartsDemo4
    },
    {
        path: '/echartsDemo5',
        name: 'echartsDemo5',
        component: echartsDemo5
    },
    {
        path: '/echartsDemo6',
        name: 'echartsDemo6',
        component: echartsDemo6
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
