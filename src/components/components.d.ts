/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from './XtxSwiper/index.vue'
import XtxGuess from './XtxGuess/index.vue'
//const files = import.meta.glob('./**/index.vue')
//console.log(files)

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
