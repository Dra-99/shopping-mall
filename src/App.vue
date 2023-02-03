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
import { mapActions } from "vuex"
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
  },
  methods: {
    ...mapActions("home", ["queryCategoryList"]),
  },
  mounted() {
    this.queryCategoryList()
  }
}
</script>

<style lang="less">
@import "~@/assets/styles/reset.less";
#app {

}
</style>
