<template name="skeleton">
  <view class="sk-container">
    <view is="components/XtxSwiper/index">
      <view class="carousel XtxSwiper-index--carousel">
        <swiper
          :circular="true"
          :interval="3000"
          :current="0"
          :autoplay="false"
          style="height: 280rpx"
        >
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator XtxSwiper-index--navigator" hover-class="none">
              <image class="image XtxSwiper-index--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper-index--indicator">
          <text class="dot XtxSwiper-index--dot active XtxSwiper-index--active"></text>
          <text class="dot XtxSwiper-index--dot"></text>
          <text class="dot XtxSwiper-index--dot"></text>
          <text class="dot XtxSwiper-index--dot"></text>
          <text class="dot XtxSwiper-index--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-501 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-126 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-814 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-582 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-905 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-840 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-489 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-647 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-366 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-62 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/HotPanel">
      <view class="panel HotPanel--panel hot HotPanel--hot">
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-995 sk-text"
              >特惠推荐</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-419 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-567 sk-text"
              >爆款推荐</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-706 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-744 sk-text"
              >一站买全</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-993 sk-text"
              >精心优选</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-164 sk-text"
              >新鲜好物</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-992 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/XtxGuess/index" class="r r">
      <view class="caption index--caption">
        <text
          class="text index--text sk-transparent sk-text-0-0000-594 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-655 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-361 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-501 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-126 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-814 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-582 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-905 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-840 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-489 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-647 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-366 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-62 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-995 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-419 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-567 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-706 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-744 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-993 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-164 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-992 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-594 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
