<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'

const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const { result } = await getHomeBannerAPI()
  bannerList.value = result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const { result } = await getHomeCategoryAPI()
  categoryList.value = result
}

const hotList = ref<HotItem[]>([])
const getHotList = async () => {
  const { result } = await getHomeHotAPI()
  hotList.value = result
}
onLoad(() => {
  getBannerList()
  getHomeCategory()
  getHotList()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
}
.scroll-view {
  flex: 1;
}
</style>
