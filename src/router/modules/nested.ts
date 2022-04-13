import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
import EmptyContainer from '@/layouts/EmptyContainer.vue'
import { MenuOutlined as MenuIcon } from '@vicons/antd'

const nestedRoute: RouteRecordRaw = {
  name: 'Nested',
  path: '/nested',
  redirect: '/nested/menu1',
  meta: {
    title: '嵌套菜单',
    icon: MenuIcon,
    sort: 2
  },
  component: Layout,
  children: [
    {
      name: 'NestedMenu1',
      path: 'menu1',
      meta: { title: '一级菜单' },
      component: () => import('@/views/Nested/NestedMenu1.vue')
    },
    {
      name: 'NestedMenu1Detail',
      path: 'menu1/:id',
      meta: { title: '详情', hidden: true, activeMenu: '/nested/menu1' },
      component: () => import('@/views/Nested/NestedMenu1Detail.vue')
    },
    {
      name: 'NestedMenu2',
      path: 'menu2',
      meta: { title: '一级菜单（嵌套视图）' },
      component: () => import('@/views/Nested/NestedMenu2.vue'),
      children: [
        {
          name: 'NestedMenu2-1',
          path: 'menu2-1',
          meta: { title: '二级菜单' },
          component: () => import('@/views/Nested/NestedMenu2-1.vue')
        }
      ]
    },
    {
      name: 'NestedMenu3',
      path: 'menu3',
      meta: { title: '一级菜单' },
      component: EmptyContainer,
      children: [
        {
          name: 'NestedMenu3-1',
          path: 'menu3-1',
          meta: { title: '二级菜单' },
          component: EmptyContainer,
          children: [
            {
              name: 'NestedMenu3-2',
              path: 'menu3-2',
              meta: { title: '三级菜单' },
              component: () => import('@/views/Nested/NestedMenu3-2.vue')
            }
          ]
        }
      ]
    }
  ]
}

export default nestedRoute
