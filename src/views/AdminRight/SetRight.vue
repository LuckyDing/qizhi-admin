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
          <div class="step_item">
            <div class="step_number"><i class="el-icon-check"></i></div>
            <div class="step_desc">添加管理员信息</div>
          </div>
          <div class="step_item step_on">
            <div class="step_number">2</div>
            <div class="step_desc">分配管理员权限</div>
          </div>
        </div>
        <div class="users"  v-show="isAdd === 0">
            当前数据：幻灵乃
        </div>
        <div class="info">
          <div class="info_item" v-for="(item, index) in rightList" :Key="item.id">
            <div class="info_item_title">
              <el-checkbox v-model="item.checked" @change="groupSelected(item.id)">{{item.name}}</el-checkbox>
            </div>
            <div class="info_list" v-for="(list, index) in item.list" :key="list.id">
              <div class="info_list_title">
                  <el-checkbox v-model="list.checked" @change="listSelected(list.id)">{{list.name}}</el-checkbox>
              </div>
              <el-row>
                <el-col :span="4" v-for="(right, index) in list.items" :key="right.id">
                  <el-checkbox v-model="right.checked" @change="itemSelected(right.id)">{{right.name}}</el-checkbox>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="info_footer">
            <el-checkbox v-model="allChecked" @change="checkAll">选择全部</el-checkbox>
          </div>
          <div class="action">
            <el-button type="primary" plain @click.native="$back">{{btnLabel}}</el-button>
            <el-button type="primary" @click.native="save">&ensp;保存&ensp;</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const rightList = () => [
  {
    id: 1,
    name: '商城管理',
    checked: false,
    list: [
      {
        id: 1,
        name: '商品管理',
        checked: false,
        items: [
          {id: 1, name: '商品添加/编辑', checked: false},
          {id: 2, name: '商品删除/恢复', checked: false},
          {id: 3, name: '分类添加/编辑', checked: false},
          {id: 4, name: '分类转移/删除', checked: false},
          {id: 5, name: '商品属性管理', checked: false},
          {id: 6, name: '商品评价管理', checked: false},
          {id: 7, name: '商品自动上下架', checked: false},
          {id: 8, name: '图片批量处理', checked: false},
          {id: 9, name: '商品批量导出', checked: false},
          {id: 10, name: '图片库管理', checked: false},
          {id: 11, name: '商品添加/编辑', checked: false},
          {id: 12, name: '商品删除/恢复', checked: false},
          {id: 13, name: '分类转移/删除', checked: false},
          {id: 14, name: '商品属性管理', checked: false},
          {id: 15, name: '商品评价管理', checked: false},
          {id: 16, name: '商品删除/恢复', checked: false},
          {id: 17, name: '商品删除/恢复', checked: false},
          {id: 18, name: '商品删除/恢复', checked: false}
        ]
      },
      {
        id: 2,
        name: '订单管理',
        checked: false,
        items: [
          {id: 19, name: '商品添加/编辑', checked: false},
          {id: 20, name: '商品删除/恢复', checked: false},
          {id: 21, name: '分类添加/编辑', checked: false},
          {id: 22, name: '分类转移/删除', checked: false},
          {id: 23, name: '商品属性管理', checked: false},
          {id: 24, name: '商品评价管理', checked: false},
          {id: 25, name: '商品自动上下架', checked: false},
          {id: 26, name: '图片批量处理', checked: false},
          {id: 27, name: '商品批量导出', checked: false},
          {id: 28, name: '图片库管理', checked: false},
          {id: 29, name: '商品添加/编辑', checked: false},
          {id: 30, name: '商品删除/恢复', checked: false},
          {id: 31, name: '分类转移/删除', checked: false},
          {id: 32, name: '商品属性管理', checked: false},
          {id: 33, name: '商品评价管理', checked: false},
          {id: 34, name: '商品删除/恢复', checked: false},
          {id: 35, name: '商品删除/恢复', checked: false},
          {id: 36, name: '商品删除/恢复', checked: false}
        ]
      }
    ]
  },
  {
    id: 2,
    name: '一级菜单',
    checked: false,
    list: [
      {
        id: 3,
        name: '二级菜单',
        checked: false,
        items: [
          {id: 31, name: '商品添加/编辑', checked: false},
          {id: 32, name: '商品删除/恢复', checked: false},
          {id: 33, name: '分类添加/编辑', checked: false},
          {id: 34, name: '分类转移/删除', checked: false},
          {id: 35, name: '商品属性管理', checked: false},
          {id: 36, name: '商品评价管理', checked: false},
          {id: 37, name: '商品自动上下架', checked: false},
          {id: 38, name: '图片批量处理', checked: false},
          {id: 39, name: '商品批量导出', checked: false},
          {id: 40, name: '图片库管理', checked: false},
          {id: 41, name: '商品添加/编辑', checked: false},
          {id: 42, name: '商品删除/恢复', checked: false},
          {id: 43, name: '分类转移/删除', checked: false},
          {id: 44, name: '商品属性管理', checked: false},
          {id: 45, name: '商品评价管理', checked: false},
          {id: 46, name: '商品删除/恢复', checked: false},
          {id: 47, name: '商品删除/恢复', checked: false},
          {id: 48, name: '商品删除/恢复', checked: false}
        ]
      },
      {
        id: 4,
        name: '订单管理',
        checked: false,
        items: [
          {id: 49, name: '商品添加/编辑', checked: false},
          {id: 50, name: '商品删除/恢复', checked: false},
          {id: 51, name: '分类添加/编辑', checked: false},
          {id: 52, name: '分类转移/删除', checked: false},
          {id: 53, name: '商品属性管理', checked: false},
          {id: 54, name: '商品评价管理', checked: false},
          {id: 55, name: '商品自动上下架', checked: false},
          {id: 56, name: '图片批量处理', checked: false},
          {id: 57, name: '商品批量导出', checked: false},
          {id: 58, name: '图片库管理', checked: false},
          {id: 59, name: '商品添加/编辑', checked: false},
          {id: 60, name: '商品删除/恢复', checked: false},
          {id: 61, name: '分类转移/删除', checked: false},
          {id: 62, name: '商品属性管理', checked: false},
          {id: 63, name: '商品评价管理', checked: false},
          {id: 64, name: '商品删除/恢复', checked: false},
          {id: 65, name: '商品删除/恢复', checked: false},
          {id: 66, name: '商品删除/恢复', checked: false}
        ]
      }
    ]
  }
]
export default {
  data () {
    return {
      active: 0,
      rightList: rightList(),
      allChecked: false,
      isAdd: 1,
      title: '添加管理员',
      btnLabel: '上一步'
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
      this.title = '权限设置'
      this.btnLabel = ' 取消 '
    }
  },
  methods: {
    groupSelected (id) {
      const vm = this
      let sum = 0
      vm.rightList.forEach(function (item, index) {
        if (item.id === id) {
          if (item.checked === true) {
            item.list.forEach(function (item1, index1) {
              item1.checked = true
              item1.items.forEach(function (item2, index2) {
                item2.checked = true
              })
            })
          } else {
            item.list.forEach(function (item1, index1) {
              item1.checked = false
              item1.items.forEach(function (item2, index2) {
                item2.checked = false
              })
            })
          }
        }
        if (item.checked === true) {
          sum += 1
        }
      })
      vm.rightList.length === sum ? vm.allChecked = true : vm.allChecked = false
    },
    listSelected (id) {
      const vm = this
      let sum = 0
      vm.rightList.forEach(function (item, index) {
        var cnt = 0
        item.list.forEach(function (item1, index1) {
          if (item1.id === id) {
            if (item1.checked === true) {
              item1.items.forEach(function (item2, index2) {
                item2.checked = true
              })
            } else {
              item1.items.forEach(function (item2, index2) {
                item2.checked = false
              })
            }
          }
          if (item1.checked === true) {
            cnt += 1
          }
        })
        // 项目全选显示
        item.list.length === cnt ? item.checked = true : item.checked = false
        if (item.checked === true) {
          sum += 1
        }
      })
      vm.rightList.length === sum ? vm.allChecked = true : vm.allChecked = false
    },
    itemSelected (id) {
      const vm = this
      let num = 0
      vm.rightList.forEach(function (item, index) {
        let sum = 0 // 2级选中统计
        item.list.forEach(function (item1, index1) {
          let cnt = 0 // 3级选中统计
          item1.items.forEach(function (item2, index2) {
            if (item2.checked === true) {
              cnt += 1
            }
          })
          // 全选改变2级check状态
          item1.items.length === cnt ? item1.checked = true : item1.checked = false
          if (item1.checked === true) {
            sum += 1
          }
        })
        // 全选改变1级check状态
        item.list.length === sum ? item.checked = true : item.checked = false
        if (item.checked === true) {
          num += 1
        }
      })
      vm.rightList.length === num ? vm.allChecked = true : vm.allChecked = false
    },
    checkAll (id) {
      const vm = this
      if (vm.allChecked === true) {
        vm.rightList.forEach(function (item, index) {
          item.checked = true
          item.list.forEach(function (item1, index1) {
            item1.checked = true
            item1.items.forEach(function (item2, index2) {
              item2.checked = true
            })
          })
        })
      } else {
        vm.rightList.forEach(function (item, index) {
          item.checked = false
          item.list.forEach(function (item1, index1) {
            item1.checked = false
            item1.items.forEach(function (item2, index2) {
              item2.checked = false
            })
          })
        })
      }
    },
    save () {
      this.$message({
        message: '添加成功，即将进入首页',
        type: 'success',
        center: true
      })
      this.$router.push({path: '/Index/Menus/10/AdminRight/'})
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
  border: 2px solid #00b8ff;
  background-color:#fff;
  color:#00b8ff;
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
  border: 1px solid #00b8ff;
  width: 99%;
}
.info{
  border: 1px solid #e4e4e4;
  padding:0em 2em 4em 2em;
  background-color: #fff;
}
.info_item{
  margin-top:3em;
}
.info_item_title{
  padding: 0 1em;
}
.info_item_title >>>.el-checkbox__label{
  font-size: 16px;
  font-weight: bolder;
}
.info_list{
  border-top: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  margin-top: 1em;
}
.info_list_title{
  line-height: 48px;
  height: 48px;
  background-color: #f9f9f9;
  padding-left: 1em;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
.el-col {
   height: 48px;
   line-height: 48px;
   border-bottom: 1px solid #e4e4e4;
   border-right: 1px solid #e4e4e4;
   padding-left: 1em;
 }
 .info_footer{
   line-height: 48px;
   height: 48px;
   background-color: #f9f9f9;
   text-align: center;
   border: 1px solid #e4e4e4;
   margin-top: 2em;
 }
 .action{
   text-align: center;
   margin-top: 4em;
 }
 .users{
   line-height: 48px;
   height: 48px;
   background-color: #f3f3f3;
   padding-left: 1em;
   border: 1px solid #e4e4e4;
   border-bottom: 0px solid #e4e4e4;
 }
</style>
