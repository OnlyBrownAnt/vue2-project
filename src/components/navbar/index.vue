<template>
  <div class="container" :style="navStyleTypes[navStyleType].containerStyle">
    <van-nav-bar
        :border="navStyleTypes[navStyleType].border"
        :fixed="navStyleTypes[navStyleType].fixed"
        :placeholder="navStyleTypes[navStyleType].placeholder"
        :style="navStyleTypes[navStyleType].style"
        :safe-area-inset-top="true"
        @click-left="onClickLeft"
        @click-right="onClickRight">
      <template #left v-if="$route.meta.navLeft">
        <div class="left flex-row-center">
          <img :src="require('@/assets/images/navbar/icon_navbar_01.png')" alt="">
        </div>
      </template>
      <template #title>
        <div class="title">
          {{$route.meta.navTitle}}
        </div>
      </template>
      <template #right v-if="$route.meta.navRight">
        <div class="right flex-row-center" >
          right
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { NavBar, Icon } from "vant";
export default {
  name: 'NavbarIndex',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  data() {
    return {
      navStyleTypes: [
        { 
          fixed: false, 
          placeholder: true, 
          border: true, 
          style: {'background-color': '#fffff', 'border-bottom': '1 px solid #eeeeee', 'position':'fixed'}, 
          containerStyle: {'height':'46px'}  // TODO 参考vant导航栏默认高度
        },
        { 
          fixed: false, 
          placeholder: false, 
          border: false, 
          style: {'background-color': 'rgba(255,0,0,0)', 'border-bottom': 'none', 'position':'fixed'},
          containerStyle: {}
        },
        { 
          fixed: false, 
          placeholder: false, 
          border: false, 
          style: {'border-bottom': 'none'},
          containerStyle: {}
        }
      ]
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  computed: {
    /**
     * 0 置顶，背景不透明
     * 1 置顶，背景透明
     * 2 不置换顶，背景不透明
     * @returns {any}
     */
    navStyleType() {
      return this.$route.meta.navStyleType ? this.$route.meta.navStyleType : 0;
    }
  },
  watch: {
    
  },
  methods: {
    onClickLeft() {
      console.log('left');
    },
    onClickRight() {
      console.log('right');
    },
  }
}
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.container {
  width: 100vw;
  ::v-deep .van-nav-bar__placeholder {
    width: 100vw;
  }
  ::v-deep .van-nav-bar {
    width: 100vw; 
  }
  ::v-deep .van-nav-bar__content {
    .van-nav-bar__left {
      padding: 0 16px;
      .left {
        width: 100%;
        height: 100%;
        img {
          width: 12px;
          height: 22px;
        }
      };
    }
    .van-nav-bar__title {
      .title {
        width: 100%;
        height: 100%;
      }; 
    }
    .van-nav-bar__right {
      padding: 0 16px;
      .right {
        width: 100%;
        height: 100%;
      }; 
    }
  }
}
</style>
