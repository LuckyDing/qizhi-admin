<template>
  <div v-title="'首页'">
    <el-container>
      <el-aside width="5em" class="aside" :style="{height: asideHeight +'px'}">
        <div class="logo">
          <img src="./../assets/images/logo.png" />
        </div>
        <el-menu @select="selected" :default-active="defaultActive" background-color="#333" text-color="#fff" active-text-color="#fff">
          <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.path">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>

        <ul class="menu_footer" ref="msgCenter">
          <li v-on:mouseenter="adminSetting = true" v-on:mouseleave="adminSetting = false">
            <div>
              <i class="iconfont icon-usered"></i>
            </div>
            <p>admin</p>
            <div class="mypop" :style="{height: asideHeight +'px', top: popOffsetTop + 'px'}" v-show="adminSetting">
              <div class="login_section">
                <div class="login_header">
                  <span style="float:left">我的信息</span>
                  <el-button type="text">个人中心</el-button>
                </div>
                <div class="login_info">
                  <p>• 本次登录：2017-07-03 14:36:21</p>
                  <p>• 登录地区：广东省深圳市 (IP：183.14.135.1)</p>
                  <p>• 上次登录：2017-07-03 14:36:21</p>
                </div>
                <el-button type="primary" plain style="width:100%">退出登录</el-button>
              </div>
            </div>
          </li>
          <li style="padding-top:2em" v-on:mouseenter="msg = true" v-on:mouseleave="msg = false">
            <el-badge :value="1" class="item">
              <div>
                <i class="iconfont icon-xiaoxi"></i>
              </div>
            </el-badge>
            <div class="mypop" :style="{height: asideHeight +'px', top: popOffsetTop + 'px'}" v-show="msg">
              <div class="login_section">
                <div class="login_header" style="text-align:left">
                  <span>订单提示</span>
                </div>
                <div class="login_info">
                  <p class="underline">待付款订单<span class="float-right">(<label color="red">10</label>)</span></p>
                  <p class="underline">待发货订单<span class="float-right">(<label color="red">10</label>)</span></p>
                  <p class="underline">已发货订单<span class="float-right">(<label color="red">10</label>)</span></p>
                  <p class="underline">已完成订单<span class="float-right">(<label color="red">10</label>)</span></p>
                </div>
              </div>
              <div class="login_section">
                <div class="login_header" style="text-align:left">
                  <span>广告位提示</span>
                </div>
                <div class="login_info">
                  <p class="underline">广告位即将到期<span class="float-right">(<label color="red">10</label>)</span></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </el-aside>
      <el-main style="padding:0;position:relative">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const menusList = () => [
  {
    name: '首页',
    icon: 'icon-home',
    path: '/Index/Menus/0/'
  },
  {
    name: '商城',
    icon: 'icon-shangcheng',
    path: '/Index/Menus/1/'
  },
  {
    name: '设备',
    icon: 'icon-shebei',
    path: '/Index/Menus/2/'
  },
  {
    name: 'APP',
    icon: 'icon-baoguo',
    path: '/Index/Menus/3/'
  },
  {
    name: '微信',
    icon: 'icon-weixin',
    path: '/Index/Menus/4/'
  },
  {
    name: '用户',
    icon: 'icon-user1',
    path: '/Index/Menus/5/'
  },
  {
    name: '维保',
    icon: 'icon-icon4',
    path: '/Index/Menus/6/'
  },
  {
    name: '推送',
    icon: 'icon-tuisong',
    path: '/Index/Menus/7/'
  },
  {
    name: '统计',
    icon: 'icon-tongji',
    path: '/Index/Menus/8/'
  },
  {
    name: '客服',
    icon: 'icon-kefu',
    path: '/Index/Menus/9/'
  },
  {
    name: '系统',
    icon: 'icon-xitongshezhi',
    path: '/Index/Menus/10/AdminRight/ArIndex'
  }
]
export default {
  data () {
    return {
      asideHeight: 0,
      popOffsetTop: 0,
      menus: menusList(),
      defaultActive: menusList()[0].path,
      adminSetting: false,
      msg: false
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
      const msgHeigth = this.$refs.msgCenter.offsetHeight
      this.popOffsetTop = msgHeigth - clientHeight
      let path = this.$route.path
      this.defaultActive = path.substr(0, this.$findPositionOfCharacter(path, '/', 4) + 1)
    })
  },
  methods: {
    selected (index) {
      this.$router.push({ path: index })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside{
  background-color:#333;
  position:relative;
  text-align:center;
  padding-bottom:140px;
  z-index:9
}
.aside >>>.el-menu-item, .el-submenu__title{
  padding: 0;
  padding-left:0 !important;
  height: 40px;
  line-height: 40px;
}
.aside >>> .el-menu-item.is-active{
  background-color: #00b8ff !important;
}
>>> .el-menu{
    border-right: solid 0px #e6e6e6;
}
>>> .el-menu-item {
    font-size: 12px;
}
>>> .el-menu-item i{
  color:#fff;
}
.iconfont{
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
.logo{
  background-color: #333;
  padding: 0.5em;
  text-align: center;
  width: 5em;
  /* border-right: solid 1px #e6e6e6; */
  box-sizing: border-box;
}
.logo img{
  width: 58%;
  display: block;
  margin: 0 auto;
}
.menu_footer{
  text-align: center;
  color:#fff;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  left:0;
  background-color: #333;
  width: 5em;
}
.menu_footer .iconfont{
  margin-right: 0;
}
.menu_footer li{
  padding: 1em;
  border-bottom: 1px solid #888;
  font-size: 12px;
}
.menu_footer li:hover{
  background-color:#00b8ff;
}
.menu_footer li:last-child{
  border-bottom: 0px solid #888;
}
.menu_footer li i{
  font-size: 1.75em;
}
.menu_footer .icon-usered{
    font-size: 3em;
}
.mypop{
  background-color: #fff;
  box-shadow: 1px 1px 1px #e4e4e4;
  position: absolute;
  left: 80px;
  top: 0;
  width: 300px;
  z-index: 2017
}
.login_section{
  text-align: right;
  color:#999;
  padding: 1em 1em 0 1em;
}
.login_section .login_header{
  border-bottom: 1px solid #e4e4e4;
  padding: 0 1em;
}
.login_header span{
  padding: 12px 0;
  display: inline-block;
}
.login_info{
  clear: both;
  padding: 0.5em 0;
  text-align: left;
}
.login_info p{
  padding: 1em;
  position: relative;
}
.underline{
  color:#666
}
.underline:not(:last-child)::after{
  content: '';
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
}
</style>
