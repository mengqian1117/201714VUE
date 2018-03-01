<template>
  <el-container style="height: 100%">
    <el-header>
      <el-row @click.native="isCollapse=!isCollapse">
        <el-col :span="1" style="color: white">
          <i class="el-icon-d-arrow-right" v-if="isCollapse"></i>
          <i class="el-icon-d-arrow-left" v-else></i>
        </el-col>
        <el-col :span="2" :offset="20">
          {{path}}
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="isCollapse" active-text-color="blue" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span slot="title">Basic</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'1-'+(index+1)" v-for="(item,index) in navData[0].Basic" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">Form</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'2-'+(index+1)" v-for="(item,index) in navData[1].Form" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span slot="title">Data</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'3-'+(index+1)" v-for="(item,index) in navData[2].Data" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">Notice</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'4-'+(index+1)" v-for="(item,index) in navData[3].Notice" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location-outline"></i>
              <span slot="title">Navigation</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'5-'+(index+1)" v-for="(item,index) in navData[4].Navigation" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">other</span>
            </template>
            <el-menu-item-group>
              <span slot="title"></span>
              <el-menu-item :index="'6-'+(index+1)" v-for="(item,index) in navData[5].other" :key="index">
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>


    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,//控制展开还是收起来 true :折起来,false展开
        navData:[
          {"Basic":["Layout布局","Container布局容器","Color色彩","Typography字体","Icon图标","Button按钮"]},
          {"Form":["Radio单选框", "Checkbox多选框", "Input输入框", "InputNumber计数器", "Select选择器", "Cascader级联选择器", "Switch开关", "Slider滑块", "TimePicker时间选择器", "DatePicker日期选择器", "DateTimePicker日期时间选择器", "Upload上传", "Rate评分", "ColorPicker颜色选择器", "Transfer穿梭框", "Form表单"]},
          {"Data":["Table表格","Tag标签","Progress进度条","Tree树形控件","Pagination分页","Badge标记"]},
          {"Notice":["Alert警告","Loading加载","Message消息提示","MessageBox弹框","Notification通知"]},
          {'Navigation': ["NavMenu导航菜单", "Tabs标签页", "Breadcrumb面包屑", "Dropdown下拉菜单", "Steps步骤条"]},
          {"other":["Dialog 对话框","Tooltip 文字提示","Popover 弹出框","Card 卡片","Carousel 走马灯","Collapse 折叠面板"]}
        ],
        navLabel:["Basic","Form","Data","Notice","Navigation","other"],
        path:""

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        this.path=key;
      },
      handleClose(key, keyPath) {
        this.path=key;
      },
      handleSelect(key,keyPath){
        this.path=this.navLabel[keyPath[0]-1]+"/"+this.navData[keyPath[0]-1][this.navLabel[keyPath[0]-1]][key.split("-")[1]-1];
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
