<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem } from '@/types/home'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
const list = ref<BannerItem[]>([])
const getBannerList = async () => {
  const { result } = await getHomeBannerAPI()
  list.value = result
}
onLoad(() => {
  getBannerList()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="list" />
  <view class="index"> </view>
</template>

<style lang="scss"></style>
