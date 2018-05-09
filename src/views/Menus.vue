<template>
  <el-container>
    <el-aside width="140px" class="aside" :style="{height: asideHeight +'px'}">
      <div class="title">{{menus.title}}</div>
      <ul class="item_list">
        <li v-for="(item, index) in menus.list" :key="index" :class="{'item_selected': selected == index}" @click="select_this(index, item.path)">• {{item.name}}</li>
      </ul>
    </el-aside>
    <el-main style="padding:0;overflow:scroll" :style="{height: asideHeight +'px'}">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
const menuList = [
  {
    title: '系统首页',
    list: [
      {
        name: '系统概况',
        path: ''
      }
    ]
  },
  {
    title: '商城管理',
    list: [
      {
        name: '商品管理',
        path: ''
      },
      {
        name: '订单管理',
        path: ''
      },
      {
        name: '优惠券管理',
        path: ''
      },
      {
        name: '基础设置',
        path: ''
      }
    ]
  },
  {
    title: '设备管理',
    list: [
      {
        name: '添加产品',
        path: ''
      },
      {
        name: '米箱',
        path: ''
      },
      {
        name: '饮水机',
        path: ''
      }
    ]
  },
  {
    title: 'APP管理',
    list: [
      {name: '资讯管理', path: ''},
      {name: '广告管理', path: ''},
      {name: '用户反馈', path: ''},
      {name: '设备设置', path: ''},
      {name: '基础设置', path: ''},
      {name: 'APP版本管理', path: ''}
    ]
  },
  {
    title: '微信管理',
    list: [
      {name: '菜单管理', path: ''},
      {name: '消息管理', path: ''},
      {name: '素材管理', path: ''}
    ]
  },
  {
    title: '用户管理',
    list: [
      {name: '用户概况', path: ''},
      {name: '全部用户', path: ''},
      {name: '经销商管理', path: ''}
    ]
  },
  {
    title: '维保管理',
    list: [
      {name: '维修概况', path: ''},
      {name: '维修列表', path: ''},
      {name: '故障事件', path: ''},
      {name: '网点管理', path: ''},
      {name: '人员管理', path: ''},
      {name: '维保设置', path: ''}
    ]
  },
  {
    title: '推送管理',
    list: [
      {name: '新建推送', path: ''},
      {name: '历史推送', path: ''}
    ]
  },
  {
    title: '统计管理',
    list: [
      {name: '用户统计', path: ''},
      {name: '设备统计', path: ''}
    ]
  },
  {
    title: '客服管理',
    list: [
      {name: '客服', path: ''}
    ]
  },
  {
    title: '系统管理',
    list: [
      {name: '管理员权限', path: '/Index/Menus/10/AdminRight/ArIndex', label: 'AdminRight'},
      {name: '菜单管理', path: '/Index/Menus/10/MenusSet/MsIndex', label: 'MenusSet'},
      {name: '参数设置', path: ''},
      {name: '字典管理', path: ''},
      {name: '文件管理', path: ''},
      {name: '日志管理', path: ''}
    ]
  }
]
export default {
  data () {
    return {
      asideHeight: 0,
      menus: '',
      selected: 0
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.body.scrollHeight
      if (scrollHeight < clientHeight) {
        this.asideHeight = clientHeight
      } else {
        this.asideHeight = scrollHeight
      }
      this.menus = menuList[this.$route.params.id]
      const begin = this.$findPositionOfCharacter(this.$route.path, '/', 4)
      const end = this.$findPositionOfCharacter(this.$route.path, '/', 5)
      let path = this.$route.path
      if (end === -1) {
        path = path.substring(begin + 1, path.length)
      } else {
        path = path.substring(begin + 1, end)
      }
      let vm = this
      // console.log(path)
      this.menus['list'].forEach(function (item, index) {
        if (item.label === path) {
          vm.selected = index
          return false
        }
      })
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.menus = menuList[to.params.id]
    // this.selected = 0
    next()
  },
  methods: {
    select_this (index, path) {
      this.selected = index
      this.$router.push({path: path})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside{
  background-color:#EAEDF1;
  text-align:center;
  color:#666;
  border-right:1px solid #e4e4e4
}
.title{
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e4e4e4;
  background-color:#F2f2f2;
}
.item_list{
  font-size: 12px;
}
.item_list li{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;
}
.item_list li:hover{
  color:#00b8ff;
}
.item_selected{
  color:#00b8ff;
  background-color: #fff;
}
</style>
