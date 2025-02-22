import type { Directive } from 'vue'
const vLazy: Directive = {
  mounted(el, bindding) {
    console.log(el, bindding)
  }
}
export default vLazy
