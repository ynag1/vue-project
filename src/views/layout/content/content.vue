<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 右侧布局 -->
    <div class="header">
      <div class="open">
        <!-- 点击折叠 -->
        <span
          v-if="!iscollapse"
          class="iconfont icon-right-indent"
          @click="changmenu"
        ></span>
        <span class="iconfont icon-bx-right-indent" @click="changmenu"></span>
      </div>
    </div>
    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['iscollapse'],
  name: 'content',
  components: { // 引入组件
  },
  data () {
    return {
    }
  },
  watch: {},
  created () { },
  methods: {
    changmenu () {
      // 点击图标
      this.$emit('changshow')
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
 
<style scoped lang='less'>
.header {
  height: 50px;
  background-color: #1e78bf;
  color: #fff;
  line-height: 50px;
  .open {
    .iconfont {
      font-size: 22px;
      cursor: pointer; //鼠标经过变成手
    }
  }
}
</style>