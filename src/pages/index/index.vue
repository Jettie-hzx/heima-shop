<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { XtxGuessInstance } from '@/types/components'

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

const guessRef = ref<XtxGuessInstance>()
//触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
//下拉刷新状态
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getBannerList(), getHomeCategory(), getHotList()])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    @scrolltolower="onScrolltolower"
    @refresherrefresh="onRefresherrefresh"
    class="scroll-view"
    :refresher-triggered="isTriggered"
    scroll-y
    refresher-enabled
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="guessRef" />
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
