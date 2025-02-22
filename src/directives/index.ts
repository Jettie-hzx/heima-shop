import type { App } from 'vue'

import vLazy from './vLazy'
const diretiveObj = {
  lazy: vLazy
}
export function registerDiretives(app: App) {
  app.directive('lazy', vLazy)
  // Object.keys(diretiveObj).forEach((key) => {
  //   app.directive(key, diretiveObj[key])
  // })
}

export default registerDiretives
