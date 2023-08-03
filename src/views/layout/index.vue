<template>
  <div class="layout">
    <!-- 导航 -->
    <div class="meun">
      <Meun :iscollapse="iscollapse" />
    </div>
    <!-- 右侧布局 -->
    <div class="content" :class="{ small: iscollapse }">
      <Content @changshow="changshow" :changshow="iscollapse" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Meun from './meun/meun.vue'
import Content from './content/content.vue'
export default {
  name: 'layout',
  components: { // 引入组件
    Meun,
    Content
  },
  data () {
    return {
      // 默认不折叠
      iscollapse: false
    }
  },
  watch: {},
  created () { },
  methods: {
    changshow () {
      this.iscollapse = !this.iscollapse
    }
  },
  mounted () { },
  computed: {// 计算属性
  }
}
</script>
 
<style scoped lang='less'>
.layout {
  display: flex;
  .meun {
    // width: 200px;
    background-color: #112f50;
    // 固定在右侧
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .content {
    padding-left: 200px;
    transition-duration: 0.25s, 1s;
  }
  .small {
    transition-duration: 0.25s, 1s;
    padding-left: 64px;
  }
}
</style>