<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Index/Menus/10/AdminRight/ArIndex' }"><span class="link">管理员权限</span></router-link>
          <span>&ensp;>&ensp;{{title}}</span>
        </div>
        <el-button size="mini" icon='el-icon-arrow-left' class="float-right margin-1em" @click.native="$back">返回</el-button>
      </el-header>
      <el-main>
        <div class="step" v-show="isAdd === 1">
          <div class="step_item step_on">
            <div class="step_number">1</div>
            <div class="step_desc">添加管理员信息</div>
          </div>
          <div class="step_item">
            <div class="step_number">2</div>
            <div class="step_desc">分配管理员权限</div>
          </div>
        </div>
        <div class="users"  v-show="isAdd === 0">
            当前数据：幻灵乃
        </div>
        <div class="form">
          <el-form ref="form" :model="form" label-width="6em">
            <el-form-item label="帐号:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="姓名:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="角色:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.role"></el-input>
            </el-form-item>
            <el-form-item label="登录密码:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.passwordCheck"></el-input>
            </el-form-item>
          </el-form>
          <el-button v-if="isAdd === 1" type="primary" style="margin:0 auto;display:block;margin-top:5em;" @click.native="next">下一步，分配管理员权限</el-button>
          <div class="action" v-else>
            <el-button type="primary" plain @click.native="$back">&ensp;取消&ensp;</el-button>
            <el-button type="primary" @click.native="save">&ensp;保存&ensp;</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      form: {
        username: '',
        name: '',
        tel: '',
        role: '',
        password: '',
        passwordCheck: ''
      },
      title: '添加管理员',
      isAdd: 1
    }
  },
  mounted: function () {
    let type = this.$route.params.type
    if (type === 'add') {
      this.isAdd = 1
      this.title = '添加管理员'
      this.btnLabel = '上一步'
    } else {
      this.isAdd = 0
      this.title = '编辑管理员信息'
    }
  },
  methods: {
    next () {
      this.$router.push({path: '/Index/Menus/10/AdminRight/SetRight/add/0'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  font-size: 14px;
  color:#666;
  background-color:#f9f9f9;
}
.link{
  color:#999;
  text-decoration:underline;
}
.link:hover{
  color:#00b8ff;
}
.header{
  height:51px !important;
  line-height:51px;
  padding: 0 32px;
  background-color: #f3f3f3
}
.step{
  display: flex;
  width: 50%;
  margin: 0 auto;
  padding: 50px 0;
}
.step_item{
  flex: 1;
  font-weight: bold;
  text-align: center;
  position: relative;
}
.step_number{
  width:50px;
  height: 50px;
  line-height: 50px;
  font-size: 28px;
  text-align: center;
  border-radius: 50%;
  border: 2px solid #e4e4e4;
  background-color:#fff;
  color:#ccc;
  margin:0 auto;
  margin-bottom: 0.5em;
}
.step_on{
  color:#00b8ff;
}
.step_on .step_number{
  border: 2px solid #00b8ff !important;
  background-color:#199ed8 !important;
  color:#fff !important;
}
.step_item:not(:last-child)::after{
  content:'';
  position: absolute;
  left:calc(50% + 27px);
  top:27px;
  border: 1px solid #e4e4e4;
  width: 99%;
}
.form{
  border: 1px solid #e4e4e4;
  padding:3em 0 10em 0;
}
.form form{
  margin: 0 auto;
  width: 36%
}
.form >>> .el-input{
  width: 100%
}
.users{
  line-height: 48px;
  height: 48px;
  background-color: #f3f3f3;
  padding-left: 1em;
  border: 1px solid #e4e4e4;
  border-bottom: 0px solid #e4e4e4;
}
.action{
  text-align: center;
  margin-top: 4em;
}
</style>
