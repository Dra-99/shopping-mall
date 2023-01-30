<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer v-show="showFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    showFooter() {
      return this.$route.meta.showFooter
    }
  }
}
</script>

<style lang="less">
@import "~@/assets/styles/reset.less";
#app {

}
</style>
