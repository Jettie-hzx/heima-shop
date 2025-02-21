<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import HomeSkeleton from './components/HomeSkeleton.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { useGuessList } from '@/hooks/useGuessList'

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
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getBannerList(), getHomeCategory(), getHotList()])

  isLoading.value = false
})

const { guessRef, onScrolltolower } = useGuessList()
//下拉刷新状态
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getBannerList(), getHomeCategory(), getHotList(), guessRef.value?.getMore()])
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
    <HomeSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>
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
