<template>
  <div class="home-container">
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import TypeNav from "@/views/Home/TypeNav";
import ListContainer from "@/views/Home/ListContainer"
import TodayRecommend from "@/views/Home/TodayRecommend"
import Rank from "@/views/Home/Rank"
import Like from "@/views/Home/Like"
import Floor from "@/views/Home/Floor"
import Brand from "@/views/Home/Brand"

import { mapState, mapActions } from "vuex"

export default {
  components: {
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState('home', {
      count: state => state.count
    })
  },
  methods: {
    ...mapActions('home', ['add'])
  }
}
</script>

<style>

</style>