<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="iscollapse"
      router
    >
      <el-menu-item> <span slot="title">采购系统后台</span> </el-menu-item>
      <el-menu-item index="/">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>系统首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">
            <i class="el-icon-location"></i>
            <span slot="title">产品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/producty">
            <i class="el-icon-location"></i>
            <span slot="title">产品分类</span></el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/orderlist">
            <i class="el-icon-menu"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/summarylist">
            <i class="el-icon-menu"></i>
            <span slot="title">汇总清单</span></el-menu-item
          >
          <el-menu-item index="/order/orderreview">
            <i class="el-icon-menu"></i>
            <span slot="title">订单审核</span></el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/advent">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span>广告分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advent/advertisinglist">
            <i class="el-icon-s-cooperation"></i>
            <span slot="title">广告列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "meun",
  props: ['iscollapse'],
  components: { // 引入组件
  },
  data () {
    return {
      // 默认不折叠
      // iscollapse: false
    }
  },
  watch: {},
  created () { },
  methods: {

  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
 
<style scoped lang='less'>
.el-menu {
  border-right: 0;
  /deep/ .is-active {
    background: #1e78bf !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>