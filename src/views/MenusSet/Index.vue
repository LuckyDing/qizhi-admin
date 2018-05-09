<template>
  <div class="content menusset">
    <el-container>
      <el-header style="height:51px">
        <div class="tabs">
          <span class="tab_item tab_item_on">菜单管理</span>
          <el-button class="float-right" style="margin-top: 1em;" size="mini" icon="el-icon el-icon-refresh">&ensp;刷新</el-button>
        </div>
      </el-header>
      <el-main style="padding:3em 20px">
        <el-container>
          <el-aside width="260px">
            <div class="menu">
              <div class="menu_title">菜单列表</div>
              <div class="menu_content">
                <el-menu :unique-opened="true" default-active="2" @select="selected" @open="open">
                  <dy-submenu :model='item' v-for='item in MenuList' :key="item.id"></dy-submenu>
                </el-menu>
              </div>
            </div>
          </el-aside>
          <el-main>
            <div class="table">
              <div class="table_header">
                <span>下级菜单</span>
                <router-link :to="{ path: 'AddMenu/add/0' }"><el-button size="mini" icon="el-icon-plus" class="float-right" style="margin-top:1em;">&ensp;添加</el-button></router-link>
              </div>
            </div>
            <el-table :data="dataList" style="width: 100%;text-align:center"  :border="true">
              <el-table-column header-align="center" prop="sort" label="排序" width="80"></el-table-column>
              <el-table-column header-align="center" prop="name" label="菜单名称" width="138"></el-table-column>
              <el-table-column header-align="center" prop="value" label="权限值" width="138"></el-table-column>
              <el-table-column header-align="center" prop="path" label="路径" width="220"></el-table-column>
              <el-table-column header-align="center" label="是否启用" width="92">
                  <template slot-scope="scope">
                    <el-switch v-model="scope.row.status" active-color="#1abc9c" inactive-color="#888"></el-switch>
                  </template>
              </el-table-column>
              <el-table-column header-align="center" label="操作">
                <template slot-scope="scope">
                  <el-button class="hover" type="text" @click.native="edit(scope.row.id)">编辑</el-button>
                  <el-button type="text">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import DySubmenu from './../../components/DySubmenu'
const MenuList = () => [
  {
    id: '1',
    name: '首页',
    children: []
  },
  {
    id: '2',
    name: '商城',
    children: [
      {
        id: '21',
        name: '商品管理',
        children: [
          {
            id: '211',
            name: '三级菜单',
            children: [
              {
                id: '2111',
                name: '四级菜单',
                children: [
                  {
                    id: '21111',
                    name: '五级菜单'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '22',
        name: '订单管理'
      },
      {
        id: '23',
        name: '优惠券管理'
      },
      {
        id: '24',
        name: '基础设置'
      }
    ]
  },
  {
    id: '3',
    name: '设备',
    children: [
      {
        id: '31',
        name: '添加产品'
      },
      {
        id: '32',
        name: '米箱'
      },
      {
        id: '33',
        name: '饮水机'
      }
    ]
  },
  {
    id: '4',
    name: 'APP',
    children: [
      {
        id: '41',
        name: '资讯管理'
      },
      {
        id: '42',
        name: '广告管理'
      },
      {
        id: '43',
        name: '用户反馈'
      },
      {
        id: '44',
        name: '设备设置'
      },
      {
        id: '45',
        name: '基础设置'
      },
      {
        id: '46',
        name: 'APP版本管理'
      }
    ]
  },
  {
    id: '5',
    name: '微信',
    children: []
  },
  {
    id: '6',
    name: '用户',
    children: []
  },
  {
    id: '7',
    name: '维保',
    children: []
  },
  {
    id: '8',
    name: '推送',
    children: []
  },
  {
    id: '9',
    name: '统计',
    children: []
  },
  {
    id: '10',
    name: '客服',
    children: []
  },
  {
    id: '11',
    name: '系统',
    children: []
  }
]
const dataList = () => [
  {
    id: 1,
    sort: 1,
    name: '管理员权限',
    value: '111',
    path: '/Index/Menus/10/AdminRight/ArIndex',
    status: false
  },
  {
    id: 2,
    sort: 2,
    name: '菜单管理',
    value: '112',
    path: '/Index/Menus/10/MenusSet/MsIndex',
    status: true
  },
  {
    id: 3,
    sort: 3,
    name: '参数设置',
    value: '113',
    path: '/Index/Menus/10',
    status: false
  },
  {
    id: 4,
    sort: 4,
    name: '字典管理',
    value: '114',
    path: '/Index/Menus/10',
    status: false
  },
  {
    id: 5,
    sort: 5,
    name: '文件管理',
    value: '115',
    path: '/Index/Menus/10',
    status: false
  },
  {
    id: 6,
    sort: 6,
    name: '日志管理',
    value: '116',
    path: '/Index/Menus/10',
    status: false
  }
]

export default {
  components: {
    DySubmenu
  },
  data () {
    return {
      dataList: dataList(),
      MenuList: MenuList()
    }
  },
  methods: {
    selected (index, indexPath) {
      console.log(index)
      this.$store.state.selectedMenu = indexPath
    },
    open (index, indexPath) {
      this.$store.state.selectedMenu = indexPath
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  font-size: 14px;
  color:#666;
}
.tabs{
  line-height: 51px;
  height: 51px;
  background-color: #f3f3f3;
  padding:0 32px;
}
.tabs .tab_item{
  line-height: 51px;
  height: 51px;
  padding: 0 0.5em;
  position: relative;
  display: inline-block;
}
.tab_item_on{
  color:#00b8ff;
}
.tab_item_on::after{
  content: '';
  position:absolute;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #00b8ff;
  width: 100%
}
.el-header{
  padding: 0 !important
}
.menu{
  background-color: #fff;
  border:1px solid #e4e4e4;
  margin-left: 12px;
  font-size: 12px;
}
.menu .menu_title{
  height: 50px;
  line-height: 50px;
  padding:0 1em;
  background-color: #f3f3f3;
}
div >>> .el-menu-item, >>> .el-submenu__title{
  height: 41px;
  line-height: 41px;
}
.table_header{
  background-color: #f3f3f3;
  line-height: 50px;
  height: 50px;
  padding: 0 1em;
  border: 1px solid #e4e4e4;
  border-bottom: 0;
  font-size: 14px;
}
.menusset >>>.el-main{
  padding: 0 1em;
}
div >>> .el-submenu__title{
  font-size: 12px;
}
</style>
