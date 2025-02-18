/**
 * 1.非 http 开头需拼接地址
 * 2.请求超时
 * 3.添加小程序端请求头标识
 * 4.添加 token 请求头标识
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

console.log(process.env.NODE_ENV)
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    // #ifdef  MP-WEIXIN
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    // #endif
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
