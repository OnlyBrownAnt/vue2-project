<template>
  <div id="app">
    <Navbar />
    <transition>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/index.vue";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="less">
#app {}
</style>
