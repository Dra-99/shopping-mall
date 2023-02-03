<template>
  <div class="home-container">
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="(item, index) in floorData" :itemData="item" :key="index" />
    <Brand />
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/views/Home/ListContainer"
import TodayRecommend from "@/views/Home/TodayRecommend"
import Rank from "@/views/Home/Rank"
import Like from "@/views/Home/Like"
import Floor from "@/views/Home/Floor"
import Brand from "@/views/Home/Brand"

import { mapState, mapActions } from "vuex"
import { getFloorData } from "@/api"
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
  data() {
    return {
      floorData: []
    }
  },
  computed: {
    ...mapState('home', {
      count: state => state.count
    })
  },
  methods: {
    ...mapActions('home', ['add'])
  },
  async mounted() {
    const data = await getFloorData();
    this.floorData = data;
  }
}
</script>

<style>

</style>