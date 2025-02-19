<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
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
onLoad(() => {
  getBannerList()
  getHomeCategory()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <view class="index"> </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
