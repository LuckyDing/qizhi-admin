import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Menus from '@/views/Menus'

import AdminRight from '@/views/AdminRight'
import ArIndex from '@/views/AdminRight/Index'
import AddUser from '@/views/AdminRight/AddUser'
import SetRight from '@/views/AdminRight/SetRight'

import MenusSet from '@/views/MenusSet'
import MsIndex from '@/views/MenusSet/Index'
import AddMenu from '@/views/MenusSet/AddMenu'
// 组建
import DySubmenu from '@/components/DySubmenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'Menus/:id',
          name: 'Menus',
          component: Menus,
          children: [
            {
              path: 'AdminRight',
              name: 'AdminRight',
              component: AdminRight,
              children: [
                {
                  path: 'ArIndex',
                  name: 'ArIndex',
                  component: ArIndex
                },
                {
                  path: 'AddUser/:type/:uid',
                  name: 'AddUser',
                  component: AddUser
                },
                {
                  path: 'SetRight/:type/:uid',
                  name: 'SetRight',
                  component: SetRight
                }
              ]
            },
            {
              path: 'MenusSet',
              name: 'MenusSet',
              component: MenusSet,
              children: [
                {
                  path: 'MsIndex',
                  name: 'MsIndex',
                  component: MsIndex
                },
                {
                  path: 'AddMenu/:type/:mid',
                  name: 'AddMenu',
                  component: AddMenu
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/DySubmenu',
      name: 'DySubmenu',
      component: DySubmenu
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
