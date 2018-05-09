<template>
  <div class="content">
    <el-container>
      <el-header class="header">
        <div style="display:inline-block">
          <router-link :to="{ path: '/Index/Menus/10/MenusSet/MsIndex' }"><span class="link">菜单管理</span></router-link>
          <span>&ensp;>&ensp;{{title}}</span>
        </div>
        <el-button size="mini" icon='el-icon-arrow-left' class="float-right margin-1em" @click.native="$back">返回</el-button>
      </el-header>
      <el-main>
        <div class="users"  v-show="isAdd === 0">
            当前数据：幻灵乃
        </div>
        <div class="form">
          <el-form ref="form" :model="form" label-width="6em">
            <el-form-item label="菜单名称:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所属上级:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-cascader
              expand-trigger="click"
              :options="options"
              v-model="form.parents"
              @change="handleChange"
              :show-all-levels="false"
              :change-on-select="true"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="权限值:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.rightValue"></el-input>
            </el-form-item>
            <el-form-item label="排序:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.sort"></el-input>
            </el-form-item>
            <el-form-item label="路径:" :rules="[{ required: true, message: '年龄不能为空'}]">
              <el-input v-model="form.path"></el-input>
            </el-form-item>
            <el-form-item label="备注:">
              <el-input type="textarea" v-model="form.remark"></el-input>
            </el-form-item>
          </el-form>
          <div class="action">
            <el-button type="primary" plain @click.native="$back">&ensp;取消&ensp;</el-button>
            <el-button type="primary" @click.native="save">&ensp;保存&ensp;</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const options = () => [
  {
    value: '1',
    label: '首页'
  },
  {
    value: '2',
    label: '商城',
    children: [
      {
        value: '21',
        label: '商品管理',
        children: [
          {
            value: '211',
            label: '三级菜单',
            children: [
              {
                value: '2111',
                label: '四级菜单',
                children: [
                  {
                    value: '21111',
                    label: '五级菜单'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        value: '22',
        label: '订单管理'
      },
      {
        value: '23',
        label: '优惠券管理'
      },
      {
        value: '24',
        label: '基础设置'
      }
    ]
  },
  {
    value: '3',
    label: '设备',
    children: [
      {
        value: '31',
        label: '添加产品'
      },
      {
        value: '32',
        label: '米箱'
      },
      {
        value: '33',
        label: '饮水机'
      }
    ]
  },
  {
    value: '4',
    label: 'APP',
    children: [
      {
        value: '41',
        label: '资讯管理'
      },
      {
        value: '42',
        label: '广告管理'
      },
      {
        value: '43',
        label: '用户反馈'
      },
      {
        value: '44',
        label: '设备设置'
      },
      {
        value: '45',
        label: '基础设置'
      },
      {
        value: '46',
        label: 'APP版本管理'
      }
    ]
  },
  {
    value: '5',
    label: '微信'
  },
  {
    value: '6',
    label: '用户'
  },
  {
    value: '7',
    label: '维保'
  },
  {
    value: '8',
    label: '推送'
  },
  {
    value: '9',
    label: '统计'
  },
  {
    value: '10',
    label: '客服'
  },
  {
    value: '11',
    label: '系统管理'
  }
]
export default {
  data () {
    return {
      active: 0,
      form: {
        name: '',
        parents: this.$store.state.selectedMenu,
        rightValue: '',
        sort: '',
        path: '',
        remark: ''
      },
      title: '添加菜单',
      isAdd: 1,
      options: options()
    }
  },
  mounted: function () {
    let type = this.$route.params.type
    if (type === 'add') {
      this.isAdd = 1
      this.title = '添加菜单'
      this.btnLabel = '上一步'
    } else {
      this.isAdd = 0
      this.title = '编辑菜单信息'
    }
  },
  methods: {
    next () {
      this.$router.push({path: '/Index/Menus/10/AdminRight/SetRight/add/0'})
    },
    handleChange (value) {
      console.log(value)
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
.form >>> .el-input,.form >>> .el-cascader{
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
