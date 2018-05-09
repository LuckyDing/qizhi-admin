<template>
  <div class="body" ref="content" v-title="'登录'">
    <div class="login_area">
      <div class="logo">
        <div class="logo_item">
          <img src="./../assets/images/logo.png" />
        </div>
        <div class="logo_item">
          <div class="title">七智厨房综合管理系统</div>
          <div class="desc">Integrated Management System</div>
        </div>
        <div class="input_area">
          <div class="input_item">
            <el-input
              placeholder="请输入用户名称"
              v-model="username">
              <i slot="prefix" class="el-input__icon iconfont icon-user"></i>
            </el-input>
          </div>
          <div class="input_item">
            <el-input
              placeholder="请输入登录密码"
              v-model="password">
              <i slot="prefix" class="el-input__icon iconfont icon-suo"></i>
            </el-input>
          </div>
          <i class="el-input__icon iconfont icon-login shake" :class="{'shake-vertical': shaking === 1, 'shake-constant': shaking===1 }" @click="login"></i>
        </div>
        <div class="warning" v-show='showWarning'>
          <i class="el-input__icon el-icon-warning"></i>
          {{warningText}}
        </div>
      </div>
    </div>
    <footer>Copyright © Qi Zhi Kitchen, All Rights Reserved.</footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      showWarning: 0,
      shaking: 0,
      warningText: '用户名或密码不正确'
    }
  },
  methods: {
    login () {
      if (this.username === '') {
        this.showWarning = 1
        this.warningText = '请填写用户账号'
        this.shake()
        return false
      }
      if (this.password === '') {
        this.showWarning = 1
        this.warningText = '请填写登录密码'
        this.shake()
        return false
      }
      if (this.password !== '123' || this.username !== '123') {
        this.showWarning = 1
        this.warningText = '用户名或密码不正确'
        this.shake()
        return false
      }
      // this.$post('http://www.msxo2o.com/weixin/?s=/Api/Shop/getShos', { pagesize: 10, pagenum: 0 }, function (data) {
      //   console.log(data)
      // })
      this.$router.push({ path: 'Index/Menus/10/AdminRight/ArIndex' })
    },
    shake () {
      this.shaking = 1
      var obj = this
      setTimeout(function () {
        obj.shaking = 0
      }, 300)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const height = document.documentElement.clientHeight
      this.$refs.content.style.height = height + 'px'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  background-image: url('./../assets/images/login_bg.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  background-color: #eee;
  width: 100%;
}
.login_area{
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 300px;
  position: absolute;
  top:50%;
  transform: translate(0,-50%);
}
.logo{
  position: absolute;
  top:3em;
  left:50%;
  transform: translate(-50%,0);
}
.logo .logo_item{
  display: inline-block;
  line-height: 50px;
}
.logo img{
  height: 108px;
  width: 108px;
}
.logo .title{
  font-size: 42px;
  color:#fff;
  padding-top: 10px;
  font-weight: 700;
}
.logo .desc{
  font-size: 28px;
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  color:#fff;
}
.input_area{
  margin-top: 2em;
  clear: both;
  position: relative;
}
.input_item{
  display: inline-block;
  width: 300px;
  margin-right: 1em;
}
div >>> .el-input__inner{
  border-radius: 0;
  height: 48px;
  padding-left: 45px;
}
div >>> .el-input__prefix{
  left: 10px;
}
.iconfont{
  font-size: 24px;
}
.icon-login{
  color:#fff;
  font-size: 48px;
  position: absolute;
  right: -0.5em;
  top: 5px;
}
.icon-login:hover{
  color:#008bff;
}
.warning{
  color:#e4ff18;
}
footer{
  position: absolute;
  bottom:3em;
  left:50%;
  transform: translate(-50%,0);
  color:#888;
  font-size: 0.875em;
}
</style>
